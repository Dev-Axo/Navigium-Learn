#!/usr/bin/env python3
"""Smoke-Test: baut die App, öffnet sie headless und klickt die Hauptwege durch."""
import json, re, subprocess, sys, pathlib
ROOT = pathlib.Path(__file__).resolve().parent.parent

def fail(msg):
    print("FEHLGESCHLAGEN:", msg); sys.exit(1)

subprocess.run(["node", "build.js"], cwd=ROOT, check=True)
html = (ROOT / "index.html").read_text(encoding="utf8")

# --- Datenintegrität ohne Browser ---
def arr(name, src):
    s = (ROOT / "src/data" / src).read_text(encoding="utf8")
    i = s.index("["); j = s.rindex("]") + 1
    return s[i:j]

words = json.loads(arr("WORDS", "words.js"))
if len(words) != 1032: fail(f"Erwartet 1032 Cursus-Wörter, gefunden {len(words)}")

node = subprocess.run(
    ["node", "-e", """
const fs=require('fs');
const f=fs.readFileSync('src/data/fables.js','utf8');
const F=eval(f.slice(f.indexOf('const FABLES=[')+13, f.indexOf('\\n];', f.indexOf('const FABLES=['))+2));
const g=fs.readFileSync('src/data/gram.js','utf8');
const G=eval(g.slice(g.indexOf('const GRAM=[')+11, g.indexOf('\\n];', g.indexOf('const GRAM=['))+2));
const ids=new Set(F.map(x=>x.id));
const bad=[];
const T=eval(g.match(/const GTOPICS=(\[[^\]]*\])/)[1]);
for(const q of G){
  if(!T.includes(q.t))bad.push('unbekanntes Thema '+q.t);
  if(q.a<0||q.a>=q.o.length)bad.push((q.f||'allgemein')+': Antwortindex ungueltig');
  if(!q.f)continue; // allgemeine Aufgabe ohne Fabelvers
  const fab=F.find(x=>x.id===q.f);
  if(!fab){bad.push('unbekannte Fabel '+q.f);continue}
  if(q.v>=fab.v.length){bad.push(q.f+' Vers '+q.v+' existiert nicht');continue}
  // Mehrteilige Markierungen werden zur Laufzeit an ' … ' getrennt (siehe ctxHtml)
  for(const part of q.h.split(' … ')){
    if(!fab.v[q.v][0].includes(part))bad.push(q.f+' V'+q.v+': Markierung "'+part+'" nicht im Vers');
  }
  if(q.a<0||q.a>=q.o.length)bad.push(q.f+': Antwortindex ungueltig');
}
for(const x of F){
  if(x.v.some(p=>!p[0]||!p[1]))bad.push(x.id+': Vers ohne Uebersetzung');
  if(!x.voc.length)bad.push(x.id+': keine Vokabeln');
}
const w=fs.readFileSync('src/data/wissen.js','utf8');
const W=eval(w.slice(w.indexOf('const GWISSEN=[')+14, w.lastIndexOf(']')+1));
let ex=0;
for(const pg of W){
  if(!T.includes(pg.quiz))bad.push('Wissensseite '+pg.id+': Thema '+pg.quiz+' fehlt');
  for(const sec of pg.s){
    if(sec.table)sec.table.rows.forEach((r,i)=>{if(r.length!==sec.table.head.length)bad.push(pg.id+': Tabelle '+sec.h+' Zeile '+i)});
    if(sec.ex)for(const [fid,v,h] of sec.ex){ex++;const fab=F.find(x=>x.id===fid);
      if(!fab||v>=fab.v.length){bad.push(pg.id+': Beispiel '+fid+' V'+v);continue}
      for(const part of h.split(' … '))if(!fab.v[v][0].includes(part))bad.push(pg.id+': "'+part+'" nicht in '+fid+' V'+v)}
  }
}
console.log(JSON.stringify({fables:F.length,gram:G.length,wissen:W.length,ex,bad}));
"""], cwd=ROOT, capture_output=True, text=True)
if node.returncode: fail(node.stderr.strip())
res = json.loads(node.stdout)
if res["bad"]: fail("; ".join(res["bad"][:5]))
print(f"Daten ok: {len(words)} Cursus-Wörter, {res['fables']} Fabeln, {res['gram']} Grammatikaufgaben, {res['wissen']} Erklärseiten mit {res['ex']} Fabel-Beispielen")

# --- Browser-Durchlauf (optional, wenn playwright installiert ist) ---
try:
    from playwright.sync_api import sync_playwright
except ImportError:
    print("playwright nicht installiert – Browsertest übersprungen"); sys.exit(0)

with sync_playwright() as p:
    b = p.chromium.launch(); pg = b.new_page(viewport={"width": 390, "height": 844})
    errs = []; pg.on("pageerror", lambda e: errs.append(str(e)))
    pg.goto((ROOT / "index.html").as_uri()); pg.wait_for_timeout(800)
    if pg.is_visible("#obS"): pg.click("#obS")
    pg.wait_for_timeout(300)
    for tab, sel in [("fab", ".fab"), ("gra", "#gFabs .chip"), ("pro", "#kpis .panel")]:
        pg.click(f'.tabs button[data-tab={tab}]'); pg.wait_for_timeout(400)
        if pg.eval_on_selector_all(sel, "e=>e.length") == 0: fail(f"Tab {tab}: {sel} leer")
    # jede Erklärseite öffnen
    pg.click('.tabs button[data-tab=gra]'); pg.wait_for_timeout(300)
    for wid in pg.eval_on_selector_all("#wGrid .wcard", "es=>es.map(e=>e.dataset.w)"):
        pg.evaluate(f"openWiki('{wid}','gra')"); pg.wait_for_timeout(80)
        if pg.eval_on_selector_all("#wBody .wsec", "e=>e.length") == 0: fail(f"Erklärseite {wid} leer")
    # eine Lernrunde
    pg.click('.tabs button[data-tab=vok]'); pg.wait_for_timeout(300)
    pg.eval_on_selector("#heroStart", "e=>e.click()"); pg.wait_for_timeout(400)
    if not pg.inner_text("#cFront").strip(): fail("Lernkarte ohne Inhalt")
    pg.click("#showBtn"); pg.wait_for_timeout(200)
    pg.click(".g3"); pg.wait_for_timeout(200)
    if errs: fail("JS-Fehler: " + "; ".join(errs))
    b.close()
print("Browsertest ok")

import json, re, unicodedata
def st(s):
    s=''.join(c for c in unicodedata.normalize('NFD',s) if unicodedata.category(c)!='Mn').lower()
    return s.replace('v','u').replace('j','i')
src=open('words.js',encoding='utf8').read()
WORDS=json.loads(src[src.index('['):src.rindex(']')+1])
counts=json.load(open('counts.json'))

def stems(e):
    out=set()
    for f in [e['la']]+re.split(r'[,;]',(e['f'] or '')):
        f=f.strip()
        if not f or ' ' in f: continue
        for part in f.split('/'):
            p=re.sub(r'[^a-z]','',st(part))
            if len(p)<3: continue
            out.add(p)
            for suf in ['ere','are','ire','isse','tum','sum','ium','us','um','is','es','it','o','a','e','i']:
                if p.endswith(suf) and len(p)-len(suf)>=4: out.add(p[:len(p)-len(suf)])
    return {s for s in out if len(s)>=4}

IDX={}   # stem -> min lesson
for e in WORDS:
    for s in stems(e):
        if s not in IDX or e['l']<IDX[s][0]: IDX[s]=(e['l'], e['la'])
STOP={'et','in','ad','non','cum','se','ut','qui','quae','quod','est','sed','hoc','se','ab','a','ex','de','per','si','ne','quam','tum','sic','at','nec','quia','iam'}
rows=[]
for r in counts:
    if not (50<=r['n']<=70): continue
    tot=0; known=0; recent=set(); unknown=[]
    for w in r['words']:
        f=st(w); tot+=1
        if f in STOP: known+=1; continue
        best=None
        for L in range(len(f),3,-1):
            if f[:L] in IDX: best=IDX[f[:L]]; break
        if best: 
            known+=1
            if 26<=best[0]<=30: recent.add(best[1])
        else: unknown.append(w)
    rows.append({'ref':r['ref'],'title':r['title'],'n':r['n'],
                 'cov':round(known/tot*100),'recent':sorted(recent),'nrec':len(recent),
                 'unknown':unknown,'nunk':len(unknown)})
rows.sort(key=lambda r:(-r['nrec'],-r['cov']))
print(f"{'Ref':8} {'W':>3} {'Abdeck':>6} {'L26-30':>6} {'Unbek':>5}  Titel")
for r in rows:
    print(f"{r['ref']:8} {r['n']:3} {r['cov']:5}% {r['nrec']:6} {r['nunk']:5}  {r['title']}")
json.dump(rows,open('cover.json','w'),ensure_ascii=False)

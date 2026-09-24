import json, re, unicodedata
def st(s):
    s=''.join(c for c in unicodedata.normalize('NFD',s) if unicodedata.category(c)!='Mn').lower()
    return s.replace('v','u').replace('j','i')

voc=json.load(open('l2630.json'))
counts=json.load(open('counts.json'))

def cand_stems(e):
    """Conservative stems: only from principal parts, min length 5, prefix-match one way."""
    out=set()
    raw=[e['la']]+re.split(r'[,;]', (e['f'] or ''))
    for f in raw:
        f=f.strip()
        if not f or ' ' in f: continue
        for part in f.split('/'):
            p=re.sub(r'[^a-z]','', st(part))
            if len(p)<4: continue
            out.add(p)
            for suf in ['ere','are','ire','isse','tum','sum','it','us','um','is','es','o','a','e','i']:
                if p.endswith(suf) and len(p)-len(suf)>=5:
                    out.add(p[:len(p)-len(suf)])
    return {s for s in out if len(s)>=5}

VS=[(e, cand_stems(e)) for e in voc]
rows=[]
for r in counts:
    if not (50<=r['n']<=70): continue
    forms=sorted({st(w) for w in r['words']})
    hits={}
    for e,ss in VS:
        for f in forms:
            if len(f)<5: continue
            if any(f.startswith(s) for s in ss):
                hits.setdefault(e['la'],set()).add(f)
    rows.append({'ref':r['ref'],'title':r['title'],'n':r['n'],
                 'hits':{k:sorted(v) for k,v in sorted(hits.items())}})
rows.sort(key=lambda r:-len(r['hits']))
for r in rows:
    print(f"{r['ref']:8} {r['n']:3}w  {len(r['hits']):2} Treffer  {r['title']}")
    for k,v in r['hits'].items(): print(f"           {k:16} <- {', '.join(v)}")
json.dump(rows, open('match2.json','w'), ensure_ascii=False)

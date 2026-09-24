import re, json, unicodedata
def strip(s):
    return ''.join(c for c in unicodedata.normalize('NFD', s) if unicodedata.category(c) != 'Mn').lower()

fables={}
for f in ['tx/b1.txt','tx/b2.txt']:
    cur=None
    for line in open(f, encoding='utf8'):
        line=line.strip()
        if line.startswith('###'):
            ref,title=line[3:].split('|'); cur=(ref,title); fables[cur]=[]
        elif line and cur: fables[cur].append(line)

def words(lines):
    out=[]
    for l in lines:
        for w in re.findall(r"[A-Za-zÀ-ž]+", l): out.append(w)
    return out

rows=[]
for (ref,title),lines in fables.items():
    w=words(lines)
    rows.append({'ref':ref,'title':title,'n':len(w),'v':len(lines),'words':w,'lines':lines})
rows.sort(key=lambda r:r['n'])
print(f"{'Ref':8} {'W':>4} {'V':>3}  Titel")
for r in rows:
    mark='  <<<' if 50<=r['n']<=70 else ''
    print(f"{r['ref']:8} {r['n']:4} {r['v']:3}  {r['title']}{mark}")
json.dump([{k:r[k] for k in ('ref','title','n','v','words','lines')} for r in rows], open('counts.json','w'), ensure_ascii=False)
print("\nIm Bereich 50-70:", sum(1 for r in rows if 50<=r['n']<=70))

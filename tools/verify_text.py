import re, json, unicodedata, subprocess
def norm(s):
    s=''.join(c for c in unicodedata.normalize('NFD',s) if unicodedata.category(c)!='Mn').lower()
    s=s.replace('v','u').replace('j','i')
    return ' '.join(re.findall(r'[a-z]+', s))
# source
src={}
for f in ['tx/b1.txt','tx/b2.txt']:
    cur=None
    for line in open(f,encoding='utf8'):
        line=line.strip()
        if line.startswith('###'): cur=line[3:].split('|')[0]; src[cur]=[]
        elif line and cur: src[cur].append(line)
# new fables
out=subprocess.run(['node','-e','''
const fs=require("fs");let all=[];
for(const f of ["new1.js","new2.js","new3.js"]){const s=fs.readFileSync(f,"utf8");all=all.concat(eval(s.slice(s.indexOf("["),s.lastIndexOf("]")+1)))}
console.log(JSON.stringify(all.map(f=>({ref:f.ref,v:f.v.map(x=>x[0])}))));
'''],capture_output=True,text=True,cwd='.')
new=json.loads(out.stdout)
bad=0
for f in new:
    s=src.get(f['ref'])
    if not s: print('KEINE QUELLE', f['ref']); continue
    a=norm(' '.join(s)); b=norm(' '.join(f['v']))
    if a==b: print(f"OK   {f['ref']:8} {len(f['v'])} Verse")
    else:
        bad+=1
        aw,bw=a.split(),b.split()
        diff=[(i,x,y) for i,(x,y) in enumerate(zip(aw,bw)) if x!=y]
        print(f"DIFF {f['ref']:8} Quelle {len(aw)} W / App {len(bw)} W")
        for i,x,y in diff[:6]: print(f"      #{i}: Quelle '{x}' vs App '{y}'")
        if len(aw)!=len(bw):
            print("      Längenunterschied:", set(aw)^set(bw))
print('\nAbweichungen:',bad)

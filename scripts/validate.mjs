import fs from 'node:fs';
import vm from 'node:vm';
import path from 'node:path';
import assert from 'node:assert/strict';
const root=path.resolve(import.meta.dirname,'..');
const dir=path.join(root,'dist');
const ctx=vm.createContext({URLSearchParams});
for(const name of ['content.js','routes.js','app.js']) new vm.Script(fs.readFileSync(path.join(dir,name),'utf8'),{filename:name});
vm.runInContext(fs.readFileSync(path.join(dir,'content.js'),'utf8')+';this.trip=TRIP',ctx);
vm.runInContext(fs.readFileSync(path.join(dir,'routes.js'),'utf8')+';this.routes=DAY_ROUTES',ctx);
assert.equal(ctx.trip.days.length,10);assert.equal(ctx.routes.length,10);
for(const [i,d] of ctx.trip.days.entries()){
 assert.ok(d.title&&d.place&&d.schedule.length&&d.paragraphs.length,`Incomplete day ${i+1}`);
 for(const img of d.images||[]){assert.ok(img.alt);if(!/^https?:/.test(img.src))assert.ok(fs.existsSync(path.join(dir,img.src)),`Missing ${img.src}`);}
 for(const [,url] of d.sources)assert.ok(/^https:\/\//.test(url));
 const r=ctx.routes[i];assert.equal(r.modes.length,r.stops.length-1);
}
const html=fs.readFileSync(path.join(dir,'index.html'),'utf8');
for(const [,ref] of html.matchAll(/(?:src|href)="([^"#]+)"/g))if(!/^(?:https?:|data:)/.test(ref))assert.ok(fs.existsSync(path.join(dir,ref)),`Missing ${ref}`);
assert.ok(fs.existsSync(path.join(dir,'.nojekyll')));
console.log('Validated 10 days, 10 routes, script syntax and local page assets.');

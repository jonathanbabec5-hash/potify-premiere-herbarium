import {test} from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,readdirSync} from 'node:fs';
const html=readFileSync('public/index.html','utf8');
test('check the published edition and its primary assets',()=>{
const names=readdirSync('public/art').sort();
assert.deepEqual(names,Array.from({length:25},(_,i)=>String(i+1).padStart(2,'0')+'.jpg'));
for(const f of names)assert.ok(html.includes('art/'+f));

});

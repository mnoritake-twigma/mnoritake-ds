import fs from 'node:fs';
import assert from 'node:assert/strict';
import ts from 'typescript';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const mappings=read('docs/code-connect/components.json');
const contexts=read('docs/code-connect/figma-properties.json');
const docs=read('.code-connect/parsed.json');
const exemptions=read('docs/code-connect/property-limitations.json');
const seen=new Set();
for(const d of docs){
 const u=new URL(d.figmaNode);assert.equal(u.pathname.split('/')[2],'KvZojcUkOfHSSBIixVHjbg');
 const id=u.searchParams.get('node-id').replaceAll('-',':');assert(!seen.has(id),`Duplicate node ${id}`);seen.add(id);
 assert(d.templateData.isParserless);assert(d.template.includes('export default'));
 assert.equal(d.label,'React');assert(d.component);
 const source=new URL(d.source);assert.equal(source.host,'github.com');
 const prefix='/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/';assert(source.pathname.startsWith(prefix));
 assert(fs.existsSync(source.pathname.slice(prefix.length)),`Missing source ${d.source}`);
}
let enumMappings=0,checkedProperties=0;
for(const m of mappings){
 assert(seen.has(m.id),`Missing ${m.name}`);
 assert(m.template.endsWith('.figma.ts'));const s=fs.readFileSync(m.template,'utf8');assert(!s.includes('figma.connect('));
 const sf=ts.createSourceFile(m.template,s,ts.ScriptTarget.Latest,true);const used=new Set();
 const props=Object.values(contexts[m.id].properties);
 function walk(n){
  if(ts.isCallExpression(n)&&ts.isPropertyAccessExpression(n.expression)&&['instance','figma.selectedInstance'].includes(n.expression.expression.getText(sf))){
   const method=n.expression.name.text;
   if(['getEnum','getString','getBoolean','getInstanceSwap','getSlot','getPropertyValue'].includes(method)){
    const name=n.arguments[0]?.text;const prop=props.find(p=>p.name===name);assert(prop,`${m.name}: unknown property ${name}`);used.add(name);
    const types={getEnum:'VARIANT',getString:'TEXT',getBoolean:'BOOLEAN',getInstanceSwap:'INSTANCE_SWAP',getSlot:'SLOT'};
    if(types[method])assert.equal(prop.type,types[method],`${m.name}: ${name}`);
    if(method==='getEnum'){
     const obj=n.arguments[1];assert(ts.isObjectLiteralExpression(obj),`${m.name}: enum must be explicit`);
     assert.deepEqual(obj.properties.map(x=>x.name.text).sort(),[...prop.variantOptions].sort(),`${m.name}: incomplete ${name}`);enumMappings++;
    }
   }
  }
  ts.forEachChild(n,walk);
 }walk(sf);
 for(const prop of props){assert(used.has(prop.name)||exemptions[m.name]?.[prop.name],`${m.name}: unaccounted ${prop.name}`);checkedProperties++;}
}
const icons=read('src/figma/icons/Icons.figma.batch.json').components;
assert.equal(icons.length,1722);assert.equal(new Set(icons.map(i=>i.component)).size,287);
for(const size of ['16','20','24','32','40','48'])assert.equal(icons.filter(i=>i.size===size).length,287);
assert.equal(docs.length,mappings.length+icons.length);
console.log(JSON.stringify({templates:mappings.length,icons:icons.length,total:docs.length,checkedProperties,exhaustiveEnumMappings:enumMappings,validation:'passed'},null,2));

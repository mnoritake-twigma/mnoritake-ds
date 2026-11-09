import { cpSync, mkdirSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=resolve(dirname(fileURLToPath(import.meta.url)),'..');
const upstream=resolve(root,'../../src');
const stage=join(root,'.build-src');
rmSync(stage,{recursive:true,force:true});mkdirSync(stage,{recursive:true});
const aliases=['primitives','icons','layout','hooks','utils','images'];
for(const name of aliases)cpSync(join(upstream,'ui',name),join(stage,'ui',name),{recursive:true});
for(const file of ['index.css','theme.css','reset.css','responsive.css','icons.css'])cpSync(join(upstream,file),join(stage,file));
function rewrite(dir){
 for(const entry of readdirSync(dir,{withFileTypes:true})){
  const file=join(dir,entry.name);
  if(entry.isDirectory()){rewrite(file);continue;}
  if(entry.name==='AGENTS.md'){rmSync(file);continue;}
  if(!/\.tsx?$/.test(file))continue;
  const source=readFileSync(file,'utf8').replace(/((?:from\s+|import\s*)["'])([^"']+)(["'])/g,(_all,before,spec,after)=>{
   const [alias,...rest]=spec.split('/');
   if(aliases.includes(alias)){
    spec=relative(dirname(file),join(stage,'ui',alias,...rest)).split('\\').join('/');
    if(!spec.startsWith('.'))spec='./'+spec;
   }
   return before+spec.replace(/\.tsx?$/,'')+after;
  });
  writeFileSync(file,source);
 }
}
rewrite(stage);
writeFileSync(join(stage,'css-properties.ts'),readFileSync(join(upstream,'index.d.ts')));
writeFileSync(join(stage,'index.ts'),`import './css-properties';\nimport './index.css';\nexport * from './ui/primitives';\nexport * from './ui/icons';\nexport * from './ui/layout';\nexport * from './ui/hooks';\n`);
for(const name of ['icons','layout','hooks'])writeFileSync(join(stage,name+'.ts'),`import './css-properties';\nexport * from './ui/${name}';\n`);
cpSync(resolve(root,'../../LICENSE'),join(root,'LICENSE'));

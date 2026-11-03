const ts=require('typescript'),fs=require('fs');
const cfg=ts.readConfigFile('tsconfig.json',ts.sys.readFile).config;
const pc=ts.parseJsonConfigFileContent(cfg,ts.sys,'.');
const p=ts.createProgram(pc.fileNames,pc.options),checker=p.getTypeChecker();
const aliases=['primitives','compositions','layout','icons','images'];const seen=new Set();let imports='';
for(const alias of aliases){
 const file=alias==='images'?'src/ui/images/index.ts':`src/ui/${alias}/index.ts`;
 const sf=p.getSourceFile(file);if(!sf)continue;
 const symbol=checker.getSymbolAtLocation(sf);if(!symbol)continue;
 const names=checker.getExportsOfModule(symbol).map(s=>s.name).filter(n=>/^[A-Za-z_$][\w$]*$/.test(n)&&n!=='default'&&!seen.has(n));names.forEach(n=>seen.add(n));imports+=`import { ${names.join(',')} } from "${alias}";\n`;
}
const previews=JSON.parse(fs.readFileSync('docs/code-connect/preview-results.json','utf8'));
for (const x of previews) {
 if (!x.success || /cannot be rendered|no Code Connect|\[object Object\]/.test(x.snippet || '')) throw new Error('Unresolved preview: '+x.filePath);
}
const lines=[];let code=imports;
previews.forEach((x,i)=>{lines.push({name:x.filePath,line:code.split('\n').length+1});code+=`\nexport function Preview${i}(){ return (${x.snippet}); }\n`;});
fs.writeFileSync('.code-connect/generated-previews.tsx',code);
const check=ts.createProgram([...pc.fileNames,'.code-connect/generated-previews.tsx'],{...pc.options,noUnusedLocals:false,noUnusedParameters:false});
const errors=ts.getPreEmitDiagnostics(check).filter(d=>d.file?.fileName.endsWith('generated-previews.tsx'));
for(const d of errors){const line=d.file.getLineAndCharacterOfPosition(d.start).line+1;const match=lines.filter(x=>x.line<=line).at(-1);console.log(match?.name+': '+ts.flattenDiagnosticMessageText(d.messageText,' '));}
console.log('Recorded Figma previews:',previews.length,'; type errors:',errors.length);
if(errors.length) process.exitCode=1;

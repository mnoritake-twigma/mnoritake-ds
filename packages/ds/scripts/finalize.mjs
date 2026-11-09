import { copyFileSync, readFileSync, readdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
copyFileSync('.build-src/theme.css','dist/tokens.css');
// Fail packaging if application-only aliases leaked into the consumer's type declarations.
function check(dir){for(const e of readdirSync(dir,{withFileTypes:true})){const p=join(dir,e.name);if(e.isDirectory())check(p);else if(p.endsWith('.d.ts')&&/from ["'](?:primitives|icons|layout|hooks|utils|images|data)["']/.test(readFileSync(p,'utf8')))throw new Error('Unresolved alias: '+p);}}
check('dist/types');

// CSS has an explicit consumer import; declaration files must not refer to nonexistent CSS siblings.
function stripCss(dir){for(const e of readdirSync(dir,{withFileTypes:true})){const p=join(dir,e.name);if(e.isDirectory())stripCss(p);else if(p.endsWith('.d.ts'))writeFileSync(p,readFileSync(p,'utf8').replace(/^import ["'][^"']+\.css["'];?\r?\n/gm,''));}}
stripCss('dist/types');

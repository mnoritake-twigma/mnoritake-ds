# PULSE / mnoritake DS

React implementation and Code Connect for [PULSE in Figma](https://www.figma.com/design/KvZojcUkOfHSSBIixVHjbg).

Based on the official [Figma Simple Design System](https://github.com/figma/sds), commit `05525f75192a3aa5d5690c5e41277ebd19d2efe1`. The upstream MIT license is preserved in [LICENSE](LICENSE); original documentation is in [UPSTREAM-README.md](UPSTREAM-README.md).

## Code Connect

- 97 component/composition templates in `src/figma` (parserless `.figma.ts`).
- 287 icon implementations connected to all six Figma sizes: **1,722 icon connections**.
- **1,819 connections total**, targeting this PULSE file, not the original SDS or the harness test copy.
- Mapping inventory: [components.json](docs/code-connect/components.json).
- Figma properties captured via MCP: [figma-properties.json](docs/code-connect/figma-properties.json).
- [Coverage and limitations](docs/code-connect/README.md).

The React CSS theme is the upstream SDS baseline. Code Connect maps component usage; it does **not** sync PULSE's green/dark tokens into CSS. Theme synchronization is separate work.

```sh
npm ci
npm run app:build
npm run codeconnect:validate
npm run storybook
```

`codeconnect:validate` parses the templates, checks every source file and target URL, validates property names/types, requires exhaustive variant maps, and accounts for properties without a matching code API. Generated output is ignored under `.code-connect/`.

For later CLI publication, use your own `FIGMA_ACCESS_TOKEN` and `npx figma connect publish`. No token is stored in this repository. The initial publication uses the official Code Connect CLI. MCP registration was also checked, but only the CLI publication produced verified dynamic templates.

Sources currently link to the `codex/pulse-code-connect` branch so they resolve while the PR is under review. After merging, replace that branch segment with `main` in the template source directives and icon batch, then republish.

## Development

`npm run app:dev` starts the demo; `npm run storybook:build` builds component documentation. Import aliases (`primitives`, `compositions`, `icons`, `layout`) match `tsconfig.json` and Vite.

The inherited token/icon export scripts contain upstream SDS data. Do not run them to regenerate the PULSE mappings without first updating their inputs. The checked-in PULSE Code Connect configuration and batch are the connection source of truth.

The upstream dependency lockfile is retained. Initial `npm ci` reported 40 dependency advisories (1 low, 18 moderate, 19 high, 2 critical); dependency upgrades are not included in this connection change.

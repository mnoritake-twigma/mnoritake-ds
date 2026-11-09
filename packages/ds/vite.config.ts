import { defineConfig } from 'vite';
export default defineConfig({
  esbuild: { jsx: "automatic" },
  build: {
    lib: {entry:{index:'.build-src/index.ts',icons:'.build-src/icons.ts',layout:'.build-src/layout.ts',hooks:'.build-src/hooks.ts'},formats:['es'],fileName:(_format,name)=>`${name}.js`,cssFileName:'styles'},
    rollupOptions: {external:id=>/^(react|react-dom|react-aria-components|clsx)(\/|$)/.test(id)},
    sourcemap: true,
  },
});

# @mnoritake-figma/ds

React components, 287 SVG icons, layout helpers and CSS design tokens from [mnoritake DS](https://github.com/mnoritake-twigma/mnoritake-ds), based on the MIT-licensed Figma Simple Design System.

## Install and use

```sh
npm install @mnoritake-figma/ds react@^18.3.1 react-dom@^18.3.1
```

```tsx
import { Button, InputField } from '@mnoritake-figma/ds';
import { IconShoppingBag } from '@mnoritake-figma/ds/icons';
import '@mnoritake-figma/ds/styles.css';

export function Example() {
  return <Button onPress={() => console.log('Add')}>
    <IconShoppingBag /> カートに追加
  </Button>;
}
```

Import `styles.css` once before application styles. It includes component CSS, tokens, the upstream reset and global typography/body rules. It is an **opt-in global stylesheet**, not a scoped theme. To use only CSS variables, import `@mnoritake-figma/ds/tokens.css` instead. Tailwind is not required; disable its preflight or explicitly manage reset precedence when combining resets.

## Exports

- `@mnoritake-figma/ds`: primitives, icons, layout, hooks and their TypeScript types.
- `@mnoritake-figma/ds/icons`: icons.
- `@mnoritake-figma/ds/layout`: Flex, FlexItem, Grid, Section.
- `@mnoritake-figma/ds/hooks`: useMediaQuery.
- `@mnoritake-figma/ds/styles.css`: full global/component stylesheet.
- `@mnoritake-figma/ds/tokens.css`: original CSS custom properties only.

ES modules only. React and React DOM 18.3 are peer dependencies and are not bundled. React 19 is not claimed as supported in 0.1.0. `react-aria-components` and `clsx` are runtime dependencies. No consumer-side aliases or TypeScript compilation of library source are needed.

## Scope and limitations

Version 0.1.0 packages the reusable UI layer. It does **not** export the sample app, business data/providers, authentication service, or compositions coupled to those providers. Code Connect and Storybook remain in the source repository; installing this package does not publish or configure Code Connect.

The CSS is the checked-in upstream SDS baseline. It does not synchronize PULSE's Figma green/dark values. The generic `Logo` contains the original Figma mark; use your own product logo in applications.

## Development

From the repository root:

```sh
npm run package:build
cd packages/ds
npm pack
```

The build reads existing `src/ui` and CSS files. It stages a temporary copy, resolves internal aliases and emits JavaScript, CSS and declarations without modifying original components. Only `dist/`, this README, LICENSE and package metadata are published. Existing app and Storybook build commands remain available.

MIT license, original copyright notices preserved.

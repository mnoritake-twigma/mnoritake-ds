// url=<FIGMA_SECTIONS_HERO_IMAGE>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Sections/Heroes.tsx
// component=Hero

import figma from "figma"

const children = figma.properties.children([
  "Text Content Title",
  "Button Group",
])

const padding=figma.selectedInstance.getEnum("Platform", {Desktop:"1600",Mobile:"600"});

export default {
  id: "HeroImage",
  imports: [
    'import { Hero } from "compositions";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<Hero padding="${padding}" variant="image" src={placeholder}>
      ${children}
    </Hero>`,
  metadata: { nestable: true },
}

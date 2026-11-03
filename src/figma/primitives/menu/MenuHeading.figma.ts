// url=<FIGMA_MENU_MENU_HEADING>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Menu/Menu.tsx
// component=MenuHeading

import figma from "figma"

const heading = figma.properties.children(["Text Strong"])

export default {
  id: "MenuHeading",
  imports: ['import { MenuHeading } from "primitives";'],
  example: figma.code`<MenuHeading>${heading}</MenuHeading>`,
  metadata: { nestable: true },
}

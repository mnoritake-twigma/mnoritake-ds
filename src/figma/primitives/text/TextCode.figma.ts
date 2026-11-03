// url=<FIGMA_TEXT_TEXT_CODE>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextCode

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextCode",
  imports: ['import { TextCode } from "primitives";'],
  example: figma.code`<TextCode>${text}</TextCode>`,
  metadata: { nestable: true },
}

// url=<FIGMA_TEXT_TEXT_SUBHEADING>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextSubheading

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextSubheading",
  imports: ['import { TextSubheading } from "primitives";'],
  example: figma.code`<TextSubheading>${text}</TextSubheading>`,
  metadata: { nestable: true },
}

// url=<FIGMA_TEXT_TEXT_SMALL>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextSmall

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextSmall",
  imports: ['import { TextSmall } from "primitives";'],
  example: figma.code`<TextSmall>${text}</TextSmall>`,
  metadata: { nestable: true },
}

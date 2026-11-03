// url=<FIGMA_TEXT_TEXT_EMPHASIS>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextEmphasis

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextEmphasis",
  imports: ['import { TextEmphasis } from "primitives";'],
  example: figma.code`<TextEmphasis>${text}</TextEmphasis>`,
  metadata: { nestable: true },
}

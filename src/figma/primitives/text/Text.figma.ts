// url=<FIGMA_TEXT_TEXT>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=Text

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "Text",
  imports: ['import { Text } from "primitives";'],
  example: figma.code`<Text>${text}</Text>`,
  metadata: { nestable: true },
}

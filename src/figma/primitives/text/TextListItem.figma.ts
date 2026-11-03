// url=<FIGMA_TEXT_TEXT_LIST_ITEM>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextListItem

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextListItem",
  imports: ['import { TextListItem } from "primitives";'],
  example: figma.code`<TextListItem>${text}</TextListItem>`,
  metadata: { nestable: true },
}

// url=<FIGMA_TEXT_TEXT_LINK_LIST_ITEM>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextListItem

import figma from "figma"

const text = figma.selectedInstance.getString("Text")

export default {
  id: "TextLinkListItem",
  imports: ['import { TextLink, TextListItem } from "primitives";'],
  example: figma.code`<TextListItem>
      <TextLink href="#">${text}</TextLink>
    </TextListItem>`,
  metadata: { nestable: true },
}

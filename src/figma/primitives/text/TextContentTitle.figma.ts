// url=<FIGMA_TEXT_TEXT_CONTENT_TITLE>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextContentTitle

import figma from "figma"

const align = figma.selectedInstance.getEnum("Align", {"Start": "start", "Center": "center"})
const title = figma.selectedInstance.getString("Title")
const subtitle = figma.selectedInstance.getBoolean("Has Subtitle") ? figma.selectedInstance.getString("Subtitle") : undefined

export default {
  id: "TextContentTitle",
  imports: ['import { TextContentTitle } from "primitives";'],
  example: figma.code`<TextContentTitle
      ${align ? figma.code`align="${align}"` : ""}
      ${figma.helpers.react.renderProp("title", title)}
      ${figma.helpers.react.renderProp("subtitle", subtitle)}
    />`,
  metadata: { nestable: true },
}

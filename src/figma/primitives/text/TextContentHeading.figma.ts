// url=<FIGMA_TEXT_TEXT_CONTENT_HEADING>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextContentHeading

import figma from "figma"

const align = figma.selectedInstance.getEnum("Align", {"Start": "start", "Center": "center"})
const heading = figma.selectedInstance.getString("Heading")
const subheading = figma.selectedInstance.getBoolean("Has Subheading") ? figma.selectedInstance.getString("Subheading") : undefined

export default {
  id: "TextContentHeading",
  imports: ['import { TextContentHeading } from "primitives";'],
  example: figma.code`<TextContentHeading
      ${align ? figma.code`align="${align}"` : ""}
      ${figma.helpers.react.renderProp("heading", heading)}
      ${figma.helpers.react.renderProp("subheading", subheading)}
    />`,
  metadata: { nestable: true },
}

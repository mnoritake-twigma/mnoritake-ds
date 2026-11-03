// url=<FIGMA_TEXT_TEXT_PRICE>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextPrice

import figma from "figma"

const label = figma.selectedInstance.getBoolean("Has Label") ? figma.selectedInstance.getString("Label") : undefined
const size = figma.selectedInstance.getEnum("Size", {"Large": "large", "Small": "small"})
const currency = figma.selectedInstance.getString("Currency")
const price = figma.selectedInstance.getString("Price")

export default {
  id: "TextPrice",
  imports: ['import { TextPrice } from "primitives";'],
  example: figma.code`<TextPrice
      ${figma.helpers.react.renderProp("label", label)}
      ${size ? figma.code`size="${size}"` : ""}
      ${figma.helpers.react.renderProp("currency", currency)}
      ${figma.helpers.react.renderProp("price", price)}
    />`,
  metadata: { nestable: true },
}

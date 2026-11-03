// url=<FIGMA_CARDS_CARD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Cards/Cards.tsx
// component=Card

import figma from "figma"

const asset = figma.selectedInstance.getBoolean("Asset") ? figma.selectedInstance.getEnum("Asset Type", {"Icon": renderInstance(figma.selectedInstance.getInstanceSwap("Icon")), "Image": figma.helpers.react.jsxElement(
    '<Image alt="Always use alt text" aspectRatio="1-1" size="small" />',
  )})
: undefined;
const heading = figma.selectedInstance.getString("Heading")
const body = figma.selectedInstance.getString("Body")
const direction = figma.selectedInstance.getEnum("Direction", {"Horizontal": "horizontal", "Vertical": "vertical"})
const actions = figma.selectedInstance.getBoolean("Button") ? figma.properties.children(["Button Group"]) : undefined
const variant = figma.selectedInstance.getEnum("Variant", {"Stroke": "stroke", "Default": "default"})


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}


export default {
  id: "Card",
  imports: [
    'import { Card } from "compositions";',
    'import { Image, Text, TextHeading } from "primitives";',
  ],
  example: figma.code`<Card${figma.helpers.react.renderProp(
    "asset",
    asset,
  )}${figma.helpers.react.renderProp(
    "direction",
    direction,
  )}${figma.helpers.react.renderProp("variant", variant)}>
      <TextHeading>${figma.helpers.react.renderChildren(heading)}</TextHeading>
      <Text>${figma.helpers.react.renderChildren(body)}</Text>
      ${figma.helpers.react.renderChildren(actions)}
    </Card>`,
  metadata: { nestable: true },
}

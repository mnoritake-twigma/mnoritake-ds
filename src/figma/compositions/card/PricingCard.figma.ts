// url=<FIGMA_CARDS_PRICING_CARD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Cards/Cards.tsx
// component=PricingCard

import figma from "figma"

const instance = figma.selectedInstance

const headingLayer = instance.findInstance("Text Heading")
const heading = headingLayer.type === "INSTANCE" ? headingLayer.getString("Text") : undefined

const buttonLayer = instance.findInstance("Button")
const action = buttonLayer.type === "INSTANCE" ? {
  label: buttonLayer.getString("Label"),
  variant: buttonLayer.getEnum("Variant", {
    Primary: "primary",
    Neutral: "neutral",
    Subtle: "subtle",
  }),
  icon: renderInstance(buttonLayer.getInstanceSwap("Icon End")),
} : undefined

const priceLayer = instance.findInstance("Text Price")
const textPrice = priceLayer.type === "INSTANCE" ? {
  price: priceLayer.getString("Price"),
  currency: priceLayer.getString("Currency"),
  label: priceLayer.getString("Label"),
  size: priceLayer.getEnum("Size", {
    Large: "large",
    Small: "small",
  }),
} : undefined

const list = figma.properties.children(["Text List"])
const variant = instance.getEnum("Variant", {"Stroke": "stroke", "Brand": "brand"})


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}

export default {
  id: "PricingCard",
  imports: ['import { PricingCard } from "compositions";'],
  example: figma.code`<PricingCard
      heading="${heading}"
      action="${action?.label}"
      ${action?.icon ? figma.code`actionIcon={${action.icon}}` : ""}
      actionVariant="${action?.variant}"
      onAction={() => {}}
      listSlot={${list}}
      interval="month"
      sku="example_sku"
      price="${textPrice?.price}"
      priceCurrency="${textPrice?.currency}"
      priceLabel="${textPrice?.label}"
      size="${textPrice?.size}"
      variant="${variant}"
    />`,
  metadata: { nestable: true },
}

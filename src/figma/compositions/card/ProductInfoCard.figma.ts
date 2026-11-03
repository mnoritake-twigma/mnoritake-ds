// url=<FIGMA_CARDS_PRODUCT_INFO_CARD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Cards/Cards.tsx
// component=ProductInfoCard

import figma from "figma";

const instance = figma.selectedInstance;

const textLayer = instance.findInstance("Text");
const heading =
  textLayer.type === "INSTANCE" ? textLayer.getString("Text") : "";

const priceLayer = instance.findInstance("Text Strong");
const price =
  priceLayer.type === "INSTANCE" ? priceLayer.getString("Text") : "";

const descriptionLayer = instance.findInstance("Text Small");
const description =
  instance.getBoolean("Show Description") && descriptionLayer.type === "INSTANCE"
    ? descriptionLayer.getString("Text")
    : "";

export default {
  id: "ProductInfoCard",
  imports: [
    'import { ProductInfoCard } from "compositions";',
    'import { Image } from "primitives";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<ProductInfoCard
      asset={
        <Image
          src={placeholder}
          size="medium"
          aspectRatio="natural"
          alt="Always describe images"
        />
      }
      rating={4.5}
      heading="${heading}"
      price="${price}"
      description="${description}"
    />`,
  metadata: { nestable: true },
};

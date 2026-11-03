// url=<FIGMA_CARDS_TESTIMONIAL_CARD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Cards/Cards.tsx
// component=TestimonialCard

import figma from "figma";

const instance = figma.selectedInstance;

const headingLayer = instance.findInstance("Text Heading");
const heading =
  headingLayer.type === "INSTANCE" ? headingLayer.getString("Text") : undefined;

const avatarLayer = instance.findInstance("Avatar Block");
const name =
  avatarLayer.type === "INSTANCE" ? avatarLayer.getString("Title") : undefined;
const username =
  avatarLayer.type === "INSTANCE"
    ? avatarLayer.getString("Description")
    : undefined;

export default {
  id: "TestimonialCard",
  imports: [
    'import { TestimonialCard } from "compositions";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<TestimonialCard
      heading="${heading}"
      src={placeholder}
      name="${name}"
      username="${username}"
    />`,
  metadata: { nestable: true },
};

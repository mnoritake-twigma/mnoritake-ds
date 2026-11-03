// url=<FIGMA_CARDS_REVIEW_CARD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Cards/Cards.tsx
// component=ReviewCard

import figma from "figma";

const instance = figma.selectedInstance;

const headingLayer = instance.findInstance("Text Heading");
const title =
  headingLayer.type === "INSTANCE" ? headingLayer.getString("Text") : undefined;

const bodyLayer = instance.findInstance("Text");
const body =
  bodyLayer.type === "INSTANCE" ? bodyLayer.getString("Text") : undefined;

const avatarLayer = instance.findInstance("Avatar Block");
const name =
  avatarLayer.type === "INSTANCE" ? avatarLayer.getString("Title") : undefined;
const date =
  avatarLayer.type === "INSTANCE"
    ? avatarLayer.getString("Description")
    : undefined;

export default {
  id: "ReviewCard",
  imports: [
    'import { ReviewCard } from "compositions";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<ReviewCard
      stars={5}
      src={placeholder}
      title="${title}"
      body="${body}"
      date="${date}"
      name="${name}"
    />`,
  metadata: { nestable: true },
};

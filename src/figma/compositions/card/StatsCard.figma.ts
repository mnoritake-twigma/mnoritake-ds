// url=<FIGMA_CARDS_STATS_CARD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Cards/Cards.tsx
// component=StatsCard

import figma from "figma";

const instance = figma.selectedInstance;

const descriptionLayer = instance.findInstance("Text");
const description =
  descriptionLayer.type === "INSTANCE"
    ? descriptionLayer.getString("Text")
    : undefined;

const statLayer = instance.findInstance("Text Heading");
const stat =
  statLayer.type === "INSTANCE" ? statLayer.getString("Text") : undefined;

const icon = renderInstance(instance.getInstanceSwap("Icon"));


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}

export default {
  id: "StatsCard",
  imports: ['import { StatsCard } from "compositions";'],
  example: figma.code`<StatsCard description="${description}" stat="${stat}" icon={${icon}} />`,
  metadata: { nestable: true },
};

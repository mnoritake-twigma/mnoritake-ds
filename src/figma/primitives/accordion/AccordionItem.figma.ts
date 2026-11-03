// url=<FIGMA_ACCORDION_ACCORDION_ITEM>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Accordion/Accordion.tsx
// component=AccordionItem

import figma from "figma";
const expanded = figma.selectedInstance.getEnum("State", {Closed:false, Open:true});
const title = figma.selectedInstance.getString("Title");
const children = figma.selectedInstance.getString("Content");

export default {
  id: "AccordionItem",
  imports: ['import { AccordionItem } from "primitives";'],
  example: figma.code`<AccordionItem ${expanded ? "defaultExpanded" : ""} title="${title}" children="${children}" />`,
  metadata: { nestable: true },
};

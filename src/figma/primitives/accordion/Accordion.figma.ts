// url=<FIGMA_ACCORDION_ACCORDION>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Accordion/Accordion.tsx
// component=Accordion

import figma from "figma";
const children = renderSlot(figma.selectedInstance.getSlot("Items")) ?? figma.properties.children(["Accordion Item"]);


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "Accordion",
  imports: ['import { Accordion } from "primitives";'],
  example: figma.code`<Accordion>${children}</Accordion>`,
  metadata: { nestable: true },
};

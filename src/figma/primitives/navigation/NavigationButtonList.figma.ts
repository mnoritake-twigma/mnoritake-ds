// url=<FIGMA_NAVIGATION_NAVIGATION_BUTTON_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Navigation/Navigation.tsx
// component=Navigation

import figma from "figma"

const children = renderSlot(figma.selectedInstance.getSlot("Slot")) ?? figma.properties.children(["Navigation Button"])
const direction = figma.selectedInstance.getEnum("Direction", {"Row": "row", "Column": "column"})


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "NavigationButtonList",
  imports: ['import { Navigation } from "primitives";'],
  example: figma.code`<Navigation direction="${direction}">${children}</Navigation>`,
  metadata: { nestable: true },
}

// url=<FIGMA_PAGINATION_PAGINATION_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationList

import figma from "figma"

const children = renderSlot(figma.selectedInstance.getSlot("Slot")) ?? figma.properties.children([
  "Pagination Page",
  "Pagination Gap",
])


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "PaginationList",
  imports: ['import { PaginationList } from "primitives";'],
  example: figma.code`<PaginationList>${children}</PaginationList>`,
  metadata: { nestable: true },
}

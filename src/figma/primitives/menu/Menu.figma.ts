// url=<FIGMA_MENU_MENU>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Menu/Menu.tsx
// component=Menu

import figma from "figma"

const children = renderSlot(figma.selectedInstance.getSlot("Slot")) ?? figma.properties.children([
  "Menu Header",
  "Menu Separator",
  "Menu Section",
  "Menu Item",
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
  id: "Menu",
  imports: ['import { Menu } from "primitives";'],
  example: figma.code`<Menu>${children}</Menu>`,
  metadata: { nestable: true },
}

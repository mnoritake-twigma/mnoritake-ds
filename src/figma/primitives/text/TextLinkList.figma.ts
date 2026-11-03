// url=<FIGMA_TEXT_TEXT_LINK_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Text/Text.tsx
// component=TextLinkList

import figma from "figma"

const children = renderSlot(figma.selectedInstance.getSlot("Slot")) ?? figma.properties.children(["Text Link List Item"])
const title = figma.selectedInstance.getBoolean("Has Title", {
  true: figma.properties.children(["Text Strong"]),
  false: undefined,
})
const density = figma.selectedInstance.getEnum("Density", {"Default": "default", "Tight": "tight"})


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "TextLinkList",
  imports: ['import { TextLinkList } from "primitives";'],
  example: figma.code`<TextLinkList${figma.helpers.react.renderProp(
    "title",
    title,
  )} density="${density}">${children}</TextLinkList>`,
  metadata: { nestable: true },
}

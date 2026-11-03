// url=<FIGMA_TOOLTIP_TOOLTIP>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Tooltip/Tooltip.tsx
// component=Tooltip

import figma from "figma";

const instance=figma.selectedInstance;
const title=instance.getString("Title");
const body=instance.getBoolean("Has Body") ? instance.getString("Body") : undefined;
const slot=renderSlot(instance.getSlot("Slot"));
const placement=instance.getEnum("Placement",{"Top": "top", "Left": "left", "Right": "right", "Bottom": "bottom"});

// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {id:"Tooltip",imports:['import { Tooltip, TextSmall, TextStrong } from "primitives";'],
example:figma.code`<Tooltip placement="${placement}"><TextStrong>${title}</TextStrong>${slot ?? (body ? figma.code`<TextSmall>${body}</TextSmall>` : undefined)}</Tooltip>`,metadata:{nestable:true}};

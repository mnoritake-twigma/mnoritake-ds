// url=<FIGMA_AVATARS_AVATAR_GROUP>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Avatar/Avatar.tsx
// component=AvatarGroup

import figma from "figma"

const instance = figma.selectedInstance
const spacing = instance.getEnum("Spacing", {"Overlap": "negative-200", "Spaced": "100"})
const children = renderSlot(instance.getSlot("Avatars")) ?? renderSlot(instance.getSlot("Avatars2")) ?? figma.properties.children(["Avatar"])


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "AvatarGroup",
  imports: ['import { AvatarGroup } from "primitives";'],
  example: figma.code`<AvatarGroup
      ${spacing ? figma.code`spacing="${spacing}"` : ""}
      ${instance.getBoolean("Show Overflow") ? figma.code`max={3}` : figma.code`max={Number.MAX_SAFE_INTEGER}`}
    >
      ${children}
    </AvatarGroup>`,
  metadata: { nestable: true },
}

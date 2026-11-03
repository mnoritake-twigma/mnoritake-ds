// url=<FIGMA_TAGS_TAG_TOGGLE>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Tag/Tag.tsx
// component=TagToggle

import figma from "figma"

const selected=figma.selectedInstance.getEnum("State", {Off:false,On:true});
const label = figma.selectedInstance.getString("Label")
const iconStart = figma.selectedInstance.getBoolean("Show Icon") ? renderInstance(figma.selectedInstance.getInstanceSwap("Icon")) : undefined


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}

export default {
  id: "TagToggle",
  imports: ['import { TagToggle } from "primitives";'],
  example: figma.code`<TagToggle
      ${figma.helpers.react.renderProp("id", label)}
      ${figma.helpers.react.renderProp("iconStart", iconStart)}
    >
      ${label}
    </TagToggle>`,
  metadata: { nestable: true, props:{selected,value:label} },
}

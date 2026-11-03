// url=<FIGMA_NAVIGATION_NAVIGATION_BUTTON>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Navigation/Navigation.tsx
// component=NavigationButton

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;
const label = instance.getBoolean("Has Label") ? instance.getString("Label") : undefined;
const direction = instance.getEnum("Direction", {"Column": "column", "Row": "row"});
const size = instance.getEnum("Type", {"Small": "small", "Medium": "medium"});
const icon = instance.getBoolean("Has Icon", {
  true: renderInstance(instance.getInstanceSwap("Icon")),
  false: undefined,
});
const isSelected = instance.getEnum("State", {"Default": undefined, "Hover": undefined, "Active": true});


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}

export default {
  id: "NavigationButton",
  imports: ['import { NavigationButton } from "primitives";'],
  example: figma.code`<NavigationButton
      ${rp("icon", icon)}
      ${rp("direction", direction)}
      ${rp("size", size)}
      ${rp("isSelected", isSelected)}
    >
      ${label}
    </NavigationButton>`,
  metadata: { nestable: true },
};

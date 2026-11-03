// url=<FIGMA_NAVIGATION_NAVIGATION_PILL>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Navigation/Navigation.tsx
// component=NavigationPill

import figma from "figma";

const label = figma.selectedInstance.getString("Label");
const rp = figma.helpers.react.renderProp;
const isSelected = figma.selectedInstance.getEnum("State", {"Default": undefined, "Active": true, "Hover": undefined});

export default {
  id: "NavigationPill",
  imports: ['import { NavigationPill } from "primitives";'],
  example: figma.code`<NavigationPill
    ${rp("isSelected", isSelected)}
  >
    ${label}
  </NavigationPill>`,
  metadata: { nestable: true },
};

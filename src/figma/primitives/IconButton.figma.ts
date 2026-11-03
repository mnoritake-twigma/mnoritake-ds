// url=<FIGMA_BUTTONS_ICON_BUTTON>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/IconButton/IconButton.tsx
// component=IconButton

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;
const variant = instance.getEnum("Variant", {"Primary": "primary", "Neutral": "neutral", "Subtle": "subtle"});
const icon = renderInstance(instance.getInstanceSwap("Icon"));
const isDisabled = instance.getEnum("State", {"Default": false, "Hover": false, "Disabled": true});
const size = instance.getEnum("Size", {"Medium": "medium", "Small": "small"});


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}

export default {
  id: "IconButton",
  imports: ['import { IconButton } from "primitives";'],
  example: figma.code`<IconButton
      aria-label="Write a nice description of the action."
      onPress={() => {}}
      ${rp("variant", variant)}
      ${rp("size", size)}
      ${rp("isDisabled", isDisabled)}
    >
      ${icon}
    </IconButton>`,
  metadata: { nestable: true },
};

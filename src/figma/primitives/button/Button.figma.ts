// url=<FIGMA_BUTTONS_BUTTON>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Button/Button.tsx
// component=Button

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;
const variant = instance.getEnum("Variant", {"Primary": "primary", "Neutral": "neutral", "Subtle": "subtle"});
const label = instance.getString("Label");
const iconStartSwap = instance.getInstanceSwap("Icon Start");
const iconStart = instance.getBoolean("Has Icon Start", {
  true: renderInstance(iconStartSwap),
});
const iconEndSwap = instance.getInstanceSwap("Icon End");
const iconEnd = instance.getBoolean("Has Icon End", {
  true: renderInstance(iconEndSwap),
});
const size = instance.getEnum("Size", {"Medium": "medium", "Small": "small"});
const isDisabled = instance.getEnum("State", {"Default": false, "Hover": false, "Disabled": true});


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}

export default {
  id: "Button",
  imports: ['import { Button } from "primitives";'],
  example: figma.code`<Button
      onPress={() => {}}
      ${rp("variant", variant)}
      ${rp("size", size)}
      ${rp("isDisabled", isDisabled)}
    >
      ${iconStart}
      ${label}
      ${iconEnd}
    </Button>`,
  metadata: { nestable: true },
};

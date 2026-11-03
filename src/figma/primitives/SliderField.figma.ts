// url=<FIGMA_INPUTS_SLIDER_FIELD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Slider/Slider.tsx
// component=SliderField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const isDisabled = instance.getEnum("State", {"Default": false, "Disabled": true});
const label = instance.getBoolean("Has Label") ? instance.getString("Label") : undefined;
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});

export default {
  id: "SliderField",
  imports: ['import { SliderField } from "primitives";'],
  example: figma.code`<SliderField
      ${rp("isDisabled", isDisabled)}
      ${rp("label", label)}
      ${rp("description", description)}
      showOutput
    />`,
  metadata: { nestable: true },
};

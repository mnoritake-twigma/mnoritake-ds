// url=<FIGMA_INPUTS_RADIO_FIELD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Radio/Radio.tsx
// component=RadioField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const selected = instance.getEnum("Value Type", {Unchecked:false,Checked:true});
const label = instance.getString("Label");
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});
const isDisabled = instance.getEnum("State", {"Default": false, "Disabled": true});

export default {
  id: "RadioField",
  imports: ['import { RadioField } from "primitives";'],
  example: figma.code`<RadioField
      value="${label}"
      ${rp("label", label)}
      ${rp("description", description)}
      ${rp("isDisabled", isDisabled)}
    />`,
  metadata: { nestable: true, props:{selected,value:label} },
};

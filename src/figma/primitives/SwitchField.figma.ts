// url=<FIGMA_INPUTS_SWITCH_FIELD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Switch/Switch.tsx
// component=SwitchField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getBoolean("Has Label") ? instance.getString("Label") : undefined;
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});
const defaultSelected = instance.getEnum("Value Type", {"Unchecked": false, "Checked": true});
const isDisabled = instance.getEnum("State", {"Disabled": true, "Default": false});

export default {
  id: "SwitchField",
  imports: ['import { SwitchField } from "primitives";'],
  example: figma.code`<SwitchField
      ${rp("label", label)}
      ${rp("description", description)}
      ${rp("defaultSelected", defaultSelected)}
      ${rp("isDisabled", isDisabled)}
    />`,
  metadata: { nestable: true },
};

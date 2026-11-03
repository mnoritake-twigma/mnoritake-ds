// url=<FIGMA_INPUTS_CHECKBOX_FIELD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Checkbox/Checkbox.tsx
// component=CheckboxField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const label = instance.getString("Label");
const description = instance.getBoolean("Has Description", {
  true: instance.getString("Description"),
  false: undefined,
});
const defaultSelected = instance.getEnum("Value Type", {"Unchecked": false, "Checked": true, "Indeterminate": true});
const isIndeterminate = instance.getEnum("Value Type", {"Unchecked": false, "Checked": false, "Indeterminate": true});
const isDisabled = instance.getEnum("State", {"Default": false, "Disabled": true});

export default {
  id: "CheckboxField",
  imports: ['import { CheckboxField } from "primitives";'],
  example: figma.code`<CheckboxField
      ${rp("label", label)}
      ${rp("description", description)}
      ${rp("defaultSelected", defaultSelected)}
      ${rp("isIndeterminate", isIndeterminate)}
      ${rp("isDisabled", isDisabled)}
    />`,
  metadata: { nestable: true },
};

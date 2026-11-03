// url=<FIGMA_INPUTS_INPUT_FIELD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Input/Input.tsx
// component=InputField

import figma from "figma";

const instance = figma.selectedInstance;
const hasLabel = instance.getPropertyValue("Has Label");

const isDisabled = instance.getEnum("State", {"Disabled": true, "Default": false, "Error": false});
const value = instance.getEnum("Value Type", {"Default": instance.getString("Value"), "Placeholder": undefined});
const placeholder = instance.getEnum("Value Type", {"Default": undefined, "Placeholder": instance.getString("Value")});
const errorMessage = hasLabel && instance.getBoolean("Has Error")
  ? instance.getEnum("State", {"Disabled": undefined, "Default": undefined, "Error": instance.getString("Error")})
  : undefined;
const label = hasLabel ? instance.getString("Label") : undefined;
const description = hasLabel
  ? instance.getBoolean("Has Description", {
      true: instance.getString("Description"),
      false: undefined,
    })
  : undefined;

const rp = figma.helpers.react.renderProp;
const imports = hasLabel
  ? ['import { InputField } from "primitives";']
  : ['import { Input } from "primitives";'];

export default {
  id: "InputField",
  imports,
  example: figma.code`<${hasLabel ? "InputField" : "Input"}
      ${rp("isDisabled", isDisabled)}
      ${rp("errorMessage", errorMessage)}
      ${rp("label", label)}
      ${rp("description", description)}
      ${rp("defaultValue", value)}
      ${rp("placeholder", placeholder)}
    />`,
  metadata: { nestable: true },
};

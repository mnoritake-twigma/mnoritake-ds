// url=<FIGMA_INPUTS_TEXTAREA_FIELD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Textarea/Textarea.tsx
// component=TextareaField

import figma from "figma";

const instance = figma.selectedInstance;
const hasLabel = instance.getPropertyValue("Has Label");

const rp = figma.helpers.react.renderProp;

const isDisabled = instance.getEnum("State", {"Default": false, "Error": false, "Disabled": true});
const value = instance.getEnum("Value Type", {"Default": instance.getString("Value"), "Placeholder": undefined});
const placeholder = instance.getEnum("Value Type", {"Default": undefined, "Placeholder": instance.getString("Value")});
const errorMessage = hasLabel && instance.getBoolean("Has Error")
  ? instance.getEnum("State", {"Default": undefined, "Error": instance.getString("Error"), "Disabled": undefined})
  : undefined;
const label = hasLabel ? instance.getString("Label") : undefined;
const description = hasLabel
  ? instance.getBoolean("Has Description", {
      true: instance.getString("Description"),
      false: undefined,
    })
  : undefined;

const imports = hasLabel
  ? ['import { TextareaField } from "primitives";']
  : ['import { Textarea } from "primitives";'];

export default {
  id: "TextareaField",
  imports,
  example: figma.code`<${hasLabel ? "TextareaField" : "Textarea"}
      ${rp("isDisabled", isDisabled)}
      ${rp("errorMessage", errorMessage)}
      ${rp("label", label)}
      ${rp("description", description)}
      ${rp("defaultValue", value)}
      ${rp("placeholder", placeholder)}
    />`,
  metadata: { nestable: true },
};

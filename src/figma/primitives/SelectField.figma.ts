// url=<FIGMA_INPUTS_SELECT_FIELD>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Select/Select.tsx
// component=SelectField

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;
const hasLabel = instance.getBoolean("Has Label");
const isDisabled = instance.getEnum("State", {"Default": false, "Error": false, "Disabled": true});
const isInvalid = instance.getEnum("State", {"Default": false, "Error": true, "Disabled": false});
const value = instance.getString("Value");
const selectedKey = instance.getEnum("Value Type", {"Default": value, "Placeholder": undefined});
const placeholder = instance.getEnum("Value Type", {"Default": undefined, "Placeholder": value});
const label = hasLabel ? instance.getString("Label") : undefined;
const error = instance.getBoolean("Has Error") ? instance.getString("Error") : undefined;
const description = instance.getBoolean("Has Description") ? instance.getString("Description") : undefined;
const open = instance.getBoolean("Open");
export default {
 id:"SelectField",imports:['import { SelectField, SelectItem } from "primitives";'],
 example:figma.code`<SelectField
 ${rp("label",label)} ${hasLabel ? "" : rp("aria-label",instance.getString("Label"))}
 ${rp("isDisabled",isDisabled)} ${rp("isInvalid",isInvalid)} ${rp("errorMessage",error)}
 ${rp("description",description)} ${rp("defaultSelectedKey",selectedKey)} ${rp("placeholder",placeholder)} ${rp("defaultOpen",open)}
 >${selectedKey ? figma.code`<SelectItem id="${selectedKey}">${value}</SelectItem>` : ""}</SelectField>`,metadata:{nestable:true}
};

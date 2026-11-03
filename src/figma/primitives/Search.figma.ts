// url=<FIGMA_INPUTS_SEARCH>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Search/Search.tsx
// component=Search

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const value = instance.getEnum("Value Type", {"Filled": instance.getString("Value"), "Placeholder": undefined});
const placeholder = instance.getEnum("Value Type", {"Filled": undefined, "Placeholder": instance.getString("Value")});
const disabled = instance.getEnum("State", {"Default": false, "Disabled": true});

export default {
  id: "Search",
  imports: ['import { Search } from "primitives";'],
  example: figma.code`<Search
      ${rp("defaultValue", value)}
      ${rp("placeholder", placeholder)}
      ${rp("disabled", disabled)}
    />`,
  metadata: { nestable: true },
};

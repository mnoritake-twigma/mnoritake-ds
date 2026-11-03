// url=<FIGMA_INPUTS_RADIO_GROUP>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Radio/Radio.tsx
// component=RadioGroup

import figma from "figma";

const children = figma.properties.children(["Radio Field"]);

const selectedValues=figma.selectedInstance.findLayers(n=>n.type === "INSTANCE" && n.name === "Radio Field").flatMap(n=>{
 if(n.type !== "INSTANCE") return [];
 const props=n.executeTemplate().metadata?.props;
 return props?.selected && typeof props.value === "string" ? [props.value] : [];
});

export default {
  id: "RadioGroup",
  imports: ['import { RadioGroup } from "primitives";'],
  example: figma.code`<RadioGroup ${figma.helpers.react.renderProp("defaultValue", selectedValues[0])}>${children}</RadioGroup>`,
  metadata: { nestable: true },
};

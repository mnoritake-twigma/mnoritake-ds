// url=<FIGMA_BUTTONS_BUTTON_GROUP>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Button/Button.tsx
// component=ButtonGroup

import figma from "figma";
const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const align = instance.getEnum("Align", {"Justify": "justify", "Start": "start", "End": "end", "Center": "center", "Stack": "stack"});
// Child extraction preserves the instance visibility set by Button Start / Button End.
const children = figma.properties.children(["Button"]);

export default {
  id: "ButtonGroup",
  imports: ['import { ButtonGroup } from "primitives";'],
  example: figma.code`<ButtonGroup
      ${rp("align", align)}
    >
      ${children}
    </ButtonGroup>`,
  metadata: { nestable: true },
};

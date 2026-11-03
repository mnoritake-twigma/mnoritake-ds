// url=<FIGMA_AVATARS_AVATAR>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Avatar/Avatar.tsx
// component=Avatar

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;
const square = instance.getEnum("Shape", {"Circle": false, "Square": true});
const size = instance.getEnum("Size", {"Large": "large", "Small": "small", "Medium": "medium"});
const initials = instance.getEnum("Type", {"Initial": instance.getString("Initials"), "Image": undefined});
const src = instance.getEnum("Type", {"Initial": false, "Image": true});

export default {
  id: "Avatar",
  imports: [
    'import { Avatar } from "primitives";',
    'import { placeholder } from "images";',
  ],
  example: figma.code`<Avatar
      ${rp("square", square)}
      ${rp("initials", initials)}
      ${rp("size", size)}
      ${src ? figma.code`src={placeholder}` : ""}
    />`,
  metadata: { nestable: true },
};

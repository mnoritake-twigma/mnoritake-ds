// url=<FIGMA_TAGS_TAG>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Tag/Tag.tsx
// component=Tag

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const onRemove = instance.getBoolean("Removable", {
  true: figma.helpers.react.function("() => {}"),
  false: undefined,
});
const label = instance.getString("Label");
const variant = instance.getEnum("Variant", {"Primary": "primary", "Secondary": "secondary"});
const scheme = figma.selectedInstance.getEnum("Scheme", {"Brand": "brand", "Neutral": "neutral", "Positive": "positive", "Danger": "danger", "Warning": "warning"});

export default {
  id: "Tag",
  imports: ['import { Tag } from "primitives";'],
  example: figma.code`<Tag
      ${rp("onRemove", onRemove)}
      ${rp("variant", variant)}
      ${rp("scheme", scheme)}
    >
      ${label}
    </Tag>`,
  metadata: { nestable: true },
};

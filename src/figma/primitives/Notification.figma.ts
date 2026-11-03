// url=<FIGMA_NOTIFICATION_NOTIFICATION>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Notification/Notification.tsx
// component=Notification

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const title = instance.getString("Title");
const icon = instance.getBoolean("Has Icon", {
  true: renderInstance(instance.getInstanceSwap("Icon")),
  false: undefined,
});
const isDismissible = instance.getBoolean("Dismissible");
const button = instance.getBoolean("Has Button") ? figma.properties.children(["Button"]) : undefined;
const body = instance.getString("Body");
const variant = instance.getEnum("Variant", {"Message": "message", "Alert": "alert"});


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}


export default {
  id: "Notification",
  imports: ['import { Notification, Text, TextStrong } from "primitives";'],
  example: figma.code`<Notification
    ${rp("icon", icon)}
    ${rp("isDismissible", isDismissible)}
    ${rp("variant", variant)}
    >
      <TextStrong>${title}</TextStrong>
      <Text>${body}</Text>
      ${button}
    </Notification>`,
  metadata: { nestable: true },
};

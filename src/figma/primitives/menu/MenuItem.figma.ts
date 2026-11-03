// url=<FIGMA_MENU_MENU_ITEM>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Menu/Menu.tsx
// component=MenuItem

import figma from "figma"

const disabled = figma.selectedInstance.getEnum("State", {Default:false, Hover:false, Disabled:true});
const icon = figma.selectedInstance.getBoolean("Has Icon", {
  true: renderInstance(figma.selectedInstance.getInstanceSwap("Icon")),
  false: undefined,
})
const description = figma.selectedInstance.getBoolean("Has Description", {
  true: figma.code`<MenuDescription>${figma.selectedInstance.getString("Description")}</MenuDescription>`,
  false: undefined,
})
const shortcut = figma.selectedInstance.getBoolean("Has Shortcut", {
  true: figma.properties.children(["Menu Shortcut"]),
  false: undefined,
})
const label = figma.selectedInstance.getString("Label")


function renderInstance(node: ReturnType<typeof figma.selectedInstance.getInstanceSwap>) {
  return node?.type === "INSTANCE" ? node.executeTemplate().example : undefined;
}

export default {
  id: "MenuItem",
  imports: [
    'import { MenuDescription, MenuItem, MenuLabel } from "primitives";',
  ],
  example: figma.code`<MenuItem ${disabled ? "isDisabled" : ""}>
      ${figma.helpers.react.renderChildren(icon)}
      <MenuLabel>${label}</MenuLabel>
      ${figma.helpers.react.renderChildren(shortcut)}
      ${description}
    </MenuItem>`,
  metadata: { nestable: true },
}

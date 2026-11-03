// url=<FIGMA_TABS_TAB>
// source=https://github.com/mnoritake-twigma/mnoritake-ds/blob/main/src/ui/primitives/Tab/Tab.tsx
// component=Tab

import figma from "figma"

// Hover is a runtime interaction; selection is applied by Tabs.
const selected=figma.selectedInstance.getEnum("Active", {Off:false,On:true});
const label = figma.selectedInstance.getString("Label")

export default {
  id: "Tab",
  imports: ['import { Tab } from "primitives";'],
  example: figma.code`<Tab${figma.helpers.react.renderProp("id", label)}>${label}</Tab>`,
  metadata: { nestable: true, props:{selected,value:label} },
}

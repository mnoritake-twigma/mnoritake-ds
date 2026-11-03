// url=<FIGMA_TABS_TABS>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Tab/Tab.tsx
// component=Tabs

import figma from "figma"

const children = renderSlot(figma.selectedInstance.getSlot("Slot")) ?? figma.properties.children(["Tab"])

const selectedValues=figma.selectedInstance.findLayers(n=>n.type === "INSTANCE" && n.name === "Tab").flatMap(n=>{
 if(n.type !== "INSTANCE") return [];
 const props=n.executeTemplate().metadata?.props;
 return props?.selected && typeof props.value === "string" ? [props.value] : [];
});


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "Tabs",
  imports: ['import { TabList, TabPanel, Tabs } from "primitives";'],
  example: figma.code`<Tabs ${figma.helpers.react.renderProp("defaultSelectedKey", selectedValues[0])}>
      <TabList>${children}</TabList>
      <TabPanel id="match-each-tab">Some stuff</TabPanel>
    </Tabs>`,
  metadata: { nestable: true },
}

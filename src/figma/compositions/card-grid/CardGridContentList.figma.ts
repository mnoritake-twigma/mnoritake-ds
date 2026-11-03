// url=<FIGMA_SECTIONS_CARD_GRID_CONTENT_LIST>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma"

const gap = figma.selectedInstance.getEnum("Platform", {"Desktop": "1200", "Mobile": "600"})
const padding = figma.selectedInstance.getEnum("Platform", {"Desktop": "1200", "Mobile": "600"})
const top = figma.properties.children(["Text Content Heading"])
const cards = renderSlot(figma.selectedInstance.getSlot("Cards")) ?? figma.properties.children(["Card"])


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "CardGridContentList",
  imports: ['import { Flex, FlexItem, Section } from "layout";'],
  example: figma.code`<Section padding="${padding}">
      <Flex container gap="1200" direction="column" alignSecondary="stretch">
        ${top}
        <FlexItem>
          <Flex wrap direction="column" gap="${gap}">
            ${cards}
          </Flex>
        </FlexItem>
      </Flex>
    </Section>`,
  metadata: { nestable: true },
}

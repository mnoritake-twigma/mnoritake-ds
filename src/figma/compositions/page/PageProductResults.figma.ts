// url=<FIGMA_SECTIONS_PAGE_PRODUCT_RESULTS>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/layout/Section/Section.tsx
// component=Section

import figma from "figma"

const controls = figma.properties.children(["Search", "Tag Toggle Group"])
const cards = renderSlot(figma.selectedInstance.getSlot("Card Grid")) ?? figma.properties.children(["Product Info Card"])
const padding = figma.selectedInstance.getEnum("Platform", {"Desktop": "1600", "Mobile": "600"})
const gap = figma.selectedInstance.getEnum("Platform", {"Desktop": "1200", "Mobile": "600"})
const majorSize = figma.selectedInstance.getEnum("Platform", {"Desktop": "major", "Mobile": "full"})
const aside = renderSlot(figma.selectedInstance.getSlot("Slot")) ?? figma.properties.children([
  "Text",
  "Tag",
  "Checkbox Group",
  "Slider Field",
])


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "PageProductResults",
  imports: [
    'import { Card } from "compositions";',
    'import { Flex, FlexItem, Section } from "layout";',
  ],
  example: figma.code`<Section padding="${padding}">
      <Flex container wrap type="quarter" gap="${gap}">
        <FlexItem size="minor">
          <Card variant="stroke">${aside}</Card>
        </FlexItem>
        <FlexItem size="${majorSize}">
          <Flex direction="column" gap="${gap}" alignSecondary="stretch">
            <Flex type="auto" alignPrimary="space-between" wrap gap="600">
              ${controls}
            </Flex>
            <Flex type="third" wrap gap="600">
              ${cards}
            </Flex>
          </Flex>
        </FlexItem>
      </Flex>
    </Section>`,
  metadata: { nestable: true },
}

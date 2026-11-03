// url=<FIGMA_SECTIONS_PANEL_IMAGE_CONTENT>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Sections/Panels.tsx
// component=Panel

import figma from "figma"

const padding = figma.selectedInstance.getEnum("Platform", {"Desktop": "1600", "Mobile": "600"})
const gap = figma.selectedInstance.getEnum("Platform", {"Desktop": "1200", "Mobile": "600"})
const children = renderSlot(figma.selectedInstance.getSlot("Text Content Flow")) ?? figma.properties.children(["Text Content Heading", "Text"])


// Older inherited slots may be present in metadata but unresolved by Code Connect.
// Prefer actual slot instances; fall back to the named children/text below.
function renderSlot(slot: ReturnType<typeof figma.selectedInstance.getSlot>) {
  if (!slot) return undefined;
  if (slot.connectedInstances?.length) return slot.connectedInstances.flatMap(n => n.type === "INSTANCE" ? n.executeTemplate().example : []);
  if (slot.some(section => section.type === "SLOT" || section.type === "ERROR")) return undefined;
  return slot;
}

export default {
  id: "PanelImageContent",
  imports: [
    'import { Panel } from "compositions";',
    'import { Flex, FlexItem, Section } from "layout";',
    'import { placeholder } from "images";',
    'import { Image } from "primitives";',
  ],
  example: figma.code`<Section padding="${padding}">
      <Panel gap="${gap}" type="half">
        <Image
          src={placeholder}
          alt="Always use image alt"
          aspectRatio="4-3"
          size="medium"
        />
        <FlexItem size="half">
          <Flex direction="column" gap="600">
            ${children}
          </Flex>
        </FlexItem>
      </Panel>
    </Section>`,
  metadata: { nestable: true },
}

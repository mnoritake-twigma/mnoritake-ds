// url=<FIGMA_PAGINATION_PAGINATION>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Pagination/Pagination.tsx
// component=Pagination

import figma from "figma"

const children = figma.properties.children([
  "Pagination Previous",
  "Pagination List",
  "Pagination Next",
])

export default {
  id: "Pagination",
  imports: ['import { Pagination } from "primitives";'],
  example: figma.code`<Pagination>${children}</Pagination>`,
  metadata: { nestable: true },
}

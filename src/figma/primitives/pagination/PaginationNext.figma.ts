// url=<FIGMA_PAGINATION_PAGINATION_NEXT>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationNext

import figma from "figma"

const href = figma.selectedInstance.getEnum("State", {"Default": "?next", "Hover": "?next", "Disabled": undefined})

export default {
  id: "PaginationNext",
  imports: ['import { PaginationNext } from "primitives";'],
  example: figma.code`<PaginationNext
      ${href ? figma.code`href="${href}"` : ""}
    />`,
  metadata: { nestable: true },
}

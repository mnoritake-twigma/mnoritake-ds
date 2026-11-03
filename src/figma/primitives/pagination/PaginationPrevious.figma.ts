// url=<FIGMA_PAGINATION_PAGINATION_PREVIOUS>
// source=https://github.com/mnoritake-twigma/mnoritake-ds/blob/main/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationPrevious

import figma from "figma"

const href = figma.selectedInstance.getEnum("State", {"Default": "?previous", "Hover": "?previous", "Disabled": undefined})

export default {
  id: "PaginationPrevious",
  imports: ['import { PaginationPrevious } from "primitives";'],
  example: figma.code`<PaginationPrevious
      ${href ? figma.code`href="${href}"` : ""}
    />`,
  metadata: { nestable: true },
}

// url=<FIGMA_PAGINATION_PAGINATION_PAGE>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Pagination/Pagination.tsx
// component=PaginationPage

import figma from "figma";

const instance = figma.selectedInstance;
const rp = figma.helpers.react.renderProp;

const number = instance.getString("Number");
const current = instance.getEnum("State", {"Default": false, "Hover": false, "Current": true, "Current Hover": true});
// Routing is application-owned; Figma exposes only Number and State.
const href = "?page=" + encodeURIComponent(number);

export default {
  id: "PaginationPage",
  imports: ['import { PaginationPage } from "primitives";'],
  example: figma.code`<PaginationPage
      ${rp("current", current)}
      ${rp("href", href)}
    >
      ${number}
    </PaginationPage>`,
  metadata: { nestable: true },
};

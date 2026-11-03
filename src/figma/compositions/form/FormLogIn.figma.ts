// url=<FIGMA_FORMS_FORM_LOG_IN>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Forms/Forms.tsx
// component=FormBox

import figma from "figma"

const children = figma.properties.children([
  "Input Field",
  "Button Group",
  "Text Link",
])

export default {
  id: "FormLogIn",
  imports: ['import { FormBox } from "compositions";'],
  example: figma.code`<FormBox onSubmit={() => {}}>${children}</FormBox>`,
  metadata: { nestable: true },
}

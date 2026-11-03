// url=<FIGMA_FORMS_FORM_CONTACT>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Forms/Forms.tsx
// component=FormBox

import figma from "figma"

const children = figma.properties.children([
  "Input Field",
  "Textarea Field",
  "Button Group",
])

export default {
  id: "FormContact",
  imports: ['import { FormBox } from "compositions";'],
  example: figma.code`<FormBox onSubmit={() => {}}>${children}</FormBox>`,
  metadata: { nestable: true },
}

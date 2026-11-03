// url=<FIGMA_FORMS_FORM_NEWSLETTER>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/compositions/Forms/Forms.tsx
// component=FormBox

import figma from "figma"

const children = figma.properties.children(["Input Field", "Button"])

export default {
  id: "FormNewsletter",
  imports: ['import { Form } from "primitives";'],
  example: figma.code`<Form singleLine onSubmit={() => {}}>
      ${children}
    </Form>`,
  metadata: { nestable: true },
}

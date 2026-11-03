// url=<FIGMA_FORMS_FORM_FORGOT_PASSWORD>
// source=https://github.com/mnoritake-twigma/mnoritake-ds/blob/main/src/ui/compositions/Forms/Forms.tsx
// component=FormBox

import figma from "figma"

const children = figma.properties.children(["Input Field", "Button Group"])

export default {
  id: "FormForgotPassword",
  imports: ['import { FormBox } from "compositions";'],
  example: figma.code`<FormBox onSubmit={() => {}}>${children}</FormBox>`,
  metadata: { nestable: true },
}

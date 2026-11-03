// url=<FIGMA_DIALOG_DIALOG_BODY>
// source=https://github.com/mnoritake-figma/mnoritake-ds/blob/codex/pulse-code-connect/src/ui/primitives/Dialog/Dialog.tsx
// component=Dialog

import figma from "figma"

const instance = figma.selectedInstance
const type = instance.getEnum("Type", {"Card": "card", "Sheet": "sheet"})
const body = instance.getString("Body")
const heading = instance.getString("Heading")
const buttons = figma.properties.children(["Button Group"])


export default {
  id: "DialogBody",
  imports: [
    'import { Dialog, DialogBody, DialogClose, DialogTitle } from "primitives";',
    'import { Button } from "primitives";',
  ],
  example: figma.code`<Dialog type="${type}">
      ${instance.getBoolean("Dismissible") ? figma.code`<DialogClose onPress={() => {}} />` : ""}
      <DialogTitle>${heading}</DialogTitle>
      <DialogBody>${body}</DialogBody>
      ${buttons}
    </Dialog>`,
  metadata: { nestable: true },
}

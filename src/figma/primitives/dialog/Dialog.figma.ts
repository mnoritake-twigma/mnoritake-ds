// url=<FIGMA_DIALOG_DIALOG>
// source=https://github.com/mnoritake-twigma/mnoritake-ds/blob/main/src/ui/primitives/Dialog/Dialog.tsx
// component=DialogModal

import figma from "figma"

const children = figma.properties.children(["Dialog Body"])

export default {
  id: "Dialog",
  imports: ['import { DialogModal } from "primitives";',
      'import { Button } from "primitives";',
      'import { ButtonGroup } from "primitives";',
  ],
  example: figma.code`<DialogModal isDismissable isOpen={true} onOpenChange={() => {}}>
      ${children}
    </DialogModal>`,
  metadata: { nestable: true },
}

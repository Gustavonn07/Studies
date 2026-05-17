import { createErrorText, createForm, createLabel, createSelect, createSubmitButton, routeConstants } from "../../index.js";
import { createFieldset } from "../../ui/fieldset.js";
import { verifySelect } from "./lib/exercise04.utils.js";

const exercise04Page = () => {
  const button = createSubmitButton()

  const label = createLabel({ text: "Escolha uma opção", id: "combo" })

  const select = createSelect({ id: "combo" })
  
  const errorText = createErrorText('Selecione uma opção válida')

  const fieldset = createFieldset()

  fieldset.appendChild(label)
  fieldset.appendChild(select)
  fieldset.appendChild(errorText)
  fieldset.appendChild(button)

  const form = createForm({
    children: fieldset,
    handler: () => verifySelect({ select, errorMessage: errorText }),
    nextPage: routeConstants.EXERCISE_05
  })

  return form
}

export { 
  exercise04Page
}

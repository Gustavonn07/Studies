import { createErrorText, createForm, createLabel, createSubmitButton, routeConstants, verifyCheckbox } from "../../index.js";
import { createFieldset } from "../../ui/fieldset.js";
import { createInput } from "../../ui/input.js";

const exercise05Page = () => {
  const button = createSubmitButton()

  const label = createLabel({ text: "Aceite os termos", id: "terms" })

  const checkbox = createInput({
    type: 'checkbox',
    id: 'terms'
  })

  const errorText = createErrorText('Você precisa marcar o checkbox')

  const fieldset = createFieldset()

  fieldset.appendChild(label)
  fieldset.appendChild(checkbox)
  fieldset.appendChild(errorText)
  fieldset.appendChild(button)

  const form = createForm({
    children: fieldset,
    handler: () => verifyCheckbox({ checkbox, errorMessage: errorText }),
    nextPage: routeConstants.EXERCISE_06
  })

  return form
}

export { exercise05Page }
import { routeConstants, verifyAnswerChacacters } from "../../index.js"
import { createForm, createLabel, createSubmitButton, createFieldset, createInput, createErrorText } from "../../ui/index.js"

const exercise02Page = () => {
  const label = createLabel({
    text: 'Digite seu nome (1 a 10 caracteres)',
    id: 'name'
  })

  const input = createInput({
    id: 'name',
    placeholder: 'Digite seu nome',
    type: 'text',
    required: true
  })

  const errorText = createErrorText('O nome deve ter entre 1 e 10 caracteres')

  const fieldset = createFieldset()

  const button = createSubmitButton()

  fieldset.appendChild(label)
  fieldset.appendChild(input)
  fieldset.appendChild(errorText)
  fieldset.appendChild(button)

  const form = createForm({ children: fieldset, nextPage: routeConstants.EXERCISE_03, handler: () => verifyAnswerChacacters({
    answer: input.value,
    errorMessage: errorText
  })})

  return form
}

export {
  exercise02Page
}
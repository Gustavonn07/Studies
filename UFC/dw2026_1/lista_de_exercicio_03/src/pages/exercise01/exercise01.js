import { createErrorText, createForm, createLabel, createSubmitButton, routeConstants } from '../../index.js'
import { createFieldset } from '../../ui/fieldset.js'
import { createInput } from '../../ui/input.js'
import { verifyAnswer } from './lib/exercise01.utils.js'

const exercise01Page = () => {

  const label = createLabel({ text: 'Digite seu nome', id: 'name' })
  
  const input = createInput({
    id: 'name',
    placeholder: 'Digite seu nome',
    type: 'text',
    required: true
  })
  
  const errorText = createErrorText('Preencha o campo!')

  const button = createSubmitButton()

  const fieldset = createFieldset()

  fieldset.appendChild(label)
  fieldset.appendChild(input)
  fieldset.appendChild(errorText)
  fieldset.appendChild(button)

  const form = createForm({ children: fieldset, handler: () => verifyAnswer({ answer: input.value, errorMessage: errorText }), nextPage: routeConstants.EXERCISE_02 })

  return form
}

export {
  exercise01Page
}
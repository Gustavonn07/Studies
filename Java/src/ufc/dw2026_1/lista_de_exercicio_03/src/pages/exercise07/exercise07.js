import { 
  createErrorText,
  createForm, 
  createLabel, 
  createSubmitButton,
  routeConstants,
  verifyRadio
} from "../../index.js";

import { createFieldset } from "../../ui/fieldset.js";
import { createInput } from "../../ui/input.js";

const exercise07Page = () => {
  const button = createSubmitButton()
  button.disabled = true
  button.classList.add('opacity-50', 'cursor-not-allowed')

  const fieldset = createFieldset()

  const options = ["Opção 1", "Opção 2", "Opção 3"]

  const radios = options.map((text, index) => {
    const wrapper = document.createElement('label')
    wrapper.className = "flex items-center gap-2 cursor-pointer"

    const radio = createInput({
      type: 'radio',
      id: `radio-${index}`,
      name: 'group'
    })

    const radioContainer = document.createElement('div')
    radioContainer.classList = 'max-w-fit'
    
    const span = document.createElement('span')
    span.textContent = text

    radio.addEventListener('change', () => {
      const isChecked = radios.some(r => r.checked)

      button.disabled = !isChecked

      if (isChecked) {
        button.classList.remove('opacity-50', 'cursor-not-allowed')
      } else {
        button.classList.add('opacity-50', 'cursor-not-allowed')
      }
    })

    radioContainer.appendChild(radio)
    wrapper.appendChild(radioContainer)
    wrapper.appendChild(span)

    fieldset.appendChild(wrapper)

    return radio
  })

  fieldset.appendChild(button)

  const form = createForm({
    children: fieldset,
    handler: () => true,
    nextPage: routeConstants.EXERCISE_08
  })

  return form
}

export { exercise07Page }
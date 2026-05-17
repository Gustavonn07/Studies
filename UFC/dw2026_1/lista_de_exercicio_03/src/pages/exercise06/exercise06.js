import { 
  createErrorText, 
  createForm, 
  createLabel, 
  createSubmitButton, 
  routeConstants,
  countChecked
} from "../../index.js";

import { createFieldset } from "../../ui/fieldset.js";
import { createInput } from "../../ui/input.js";

const exercise06Page = () => {
  const button = createSubmitButton()

  const fieldset = createFieldset()

  const options = ["Opção 1", "Opção 2", "Opção 3"]

  const resultText = createErrorText('')
  resultText.className = "text-sm text-gray-800"

  const checkboxes = options.map((text, index) => {
    const wrapper = document.createElement('label')
    wrapper.className = "flex items-center gap-2 cursor-pointer"

    const checkbox = createInput({
      type: 'checkbox',
      id: `option-${index}`
    })

    checkbox.className = "w-4 h-4 accent-blue-600"

    const span = document.createElement('span')
    span.textContent = text
    span.className = "text-gray-700"

    checkbox.addEventListener('change', () => {
      countChecked({ checkboxes, resultText })
    })

    wrapper.appendChild(checkbox)
    wrapper.appendChild(span)

    fieldset.appendChild(wrapper)

    return checkbox
  })

  countChecked({ checkboxes, resultText })

  fieldset.appendChild(resultText)
  fieldset.appendChild(button)

  const form = createForm({
    children: fieldset,
    handler: () => true,
    nextPage: routeConstants.EXERCISE_07
  })

  return form
}

export {
  exercise06Page
}
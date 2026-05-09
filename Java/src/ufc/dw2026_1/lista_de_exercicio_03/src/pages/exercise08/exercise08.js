import { 
  createErrorText,
  createForm, 
  createLabel, 
  createSubmitButton,
  pageUtils,
  routeConstants,
  verifyForm
} from "../../index.js";

import { createFieldset } from "../../ui/fieldset.js";
import { createInput } from "../../ui/input.js";

const exercise08Page = () => {
  const button = createSubmitButton()

  const fieldset = createFieldset()

  const nameLabel = createLabel({ text: "Nome", id: "name" })
  const nameInput = createInput({
    id: "name",
    type: "text",
    placeholder: "Digite seu nome"
  })

  const loginLabel = createLabel({ text: "Login", id: "login" })
  const loginInput = createInput({
    id: "login",
    type: "text",
    placeholder: "Digite seu login"
  })

  const passwordLabel = createLabel({ text: "Senha", id: "password" })
  const passwordInput = createInput({
    id: "password",
    type: "password",
    placeholder: "Digite sua senha"
  })

  const errorText = createErrorText("")

  fieldset.appendChild(nameLabel)
  fieldset.appendChild(nameInput)

  fieldset.appendChild(loginLabel)
  fieldset.appendChild(loginInput)

  fieldset.appendChild(passwordLabel)
  fieldset.appendChild(passwordInput)

  fieldset.appendChild(errorText)
  fieldset.appendChild(button)

  const form = createForm({
    children: fieldset,
    handler: () => verifyForm({
      name: nameInput,
      login: loginInput,
      password: passwordInput,
      errorText
    }),
  })

  return form
}

export { exercise08Page }
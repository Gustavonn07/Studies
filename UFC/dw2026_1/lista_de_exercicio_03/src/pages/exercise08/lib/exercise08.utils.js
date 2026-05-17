const verifyForm = ({ name, login, password, errorText }) => {
  const nameValue = name.value.trim()
  const loginValue = login.value.trim()
  const passwordValue = password.value.trim()

  const strongPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9]).{4,}$/

  if (!nameValue || !loginValue || !passwordValue) {
    errorText.textContent = "Preencha todos os campos"
    errorText.classList.remove('hidden')
    return false
  }

  if (!strongPassword.test(passwordValue)) {
    errorText.textContent = "Senha fraca (mín: 1 maiúscula, 1 minúscula, 1 especial, 4+ caracteres)"
    errorText.classList.remove('hidden')
    return false
  }

  errorText.classList.add('hidden')
  
  return true
}

export { verifyForm }
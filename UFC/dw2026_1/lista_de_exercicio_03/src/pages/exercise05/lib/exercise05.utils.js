const verifyCheckbox = ({ checkbox, errorMessage }) => {
  if (checkbox.checked) {
    errorMessage.classList.add('hidden')
    return true
  }

  errorMessage.classList.remove('hidden')
  return false
}

export { verifyCheckbox }
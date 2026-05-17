const verifyRadio = ({ radios, errorMessage }) => {
  const isChecked = radios.some(radio => radio.checked)

  if (isChecked) {
    errorMessage.classList.add('hidden')
    return true
  }

  errorMessage.classList.remove('hidden')
  return false
}

export { verifyRadio }
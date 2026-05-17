const verifySelect = ({ select, errorMessage }) => {
  const isValid = select.selectedIndex !== 0

  if (isValid) {
    errorMessage.classList.add('hidden')
    return true
  }

  errorMessage.classList.remove('hidden')
  return false
}

export { verifySelect }
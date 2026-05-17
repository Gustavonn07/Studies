
const verifyAnswerNumber = ({ answer, errorMessage }) => {
  const parsed = Number(answer)

  const isValidNumber = answer.trim() !== '' && !Number.isNaN(parsed)

  if (isValidNumber && parsed > 0) {
    errorMessage.classList.add('hidden')
    return true
  }

  errorMessage.classList.remove('hidden')
  return false
}

export {
  verifyAnswerNumber
}

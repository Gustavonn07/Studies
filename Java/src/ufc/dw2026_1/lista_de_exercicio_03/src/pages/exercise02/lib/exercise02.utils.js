const verifyAnswerChacacters = ({answer, errorMessage}) => {
  if(answer.length > 1 && answer.length <= 10) {
    errorMessage.classList.add('hidden')
    return true
  }

  errorMessage.classList.remove('hidden')
  return false
}

export {
  verifyAnswerChacacters
}
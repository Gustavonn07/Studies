const verifyAnswer = ({answer, errorMessage}) => {
  if(answer.length === 0) {
    errorMessage.classList.remove('hidden')
    return false
  }

  errorMessage.classList.add('hidden')
  return true
}

export {
  verifyAnswer
}
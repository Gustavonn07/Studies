const createErrorText = (text) => {

  const errorText = document.createElement('span')
  errorText.textContent = text
  errorText.className = `
    text-sm
    text-red-500
    hidden
  `
  
  return errorText
}

export { createErrorText }
const createSubmitButton = () => {

  const button = document.createElement('button')
  button.type = 'submit'
  button.textContent = 'Enviar'
  button.className = `
    bg-blue-600
    text-white
    rounded-lg
    py-2
    hover:bg-blue-700
    transition
  `

  return button
}

export { createSubmitButton }
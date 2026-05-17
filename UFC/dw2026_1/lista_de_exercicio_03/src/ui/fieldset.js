const createFieldset = (children) => {

  const fieldset = document.createElement('fieldset')
  fieldset.className = `
    w-full
    flex
    flex-col
    gap-4
  `

  return fieldset
}

export { createFieldset }
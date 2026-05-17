const createLabel = ({ text, id }) => {

  const label = document.createElement('label')
  label.htmlFor = id
  label.name = id + '_label'
  label.textContent = text ?? 'Digite algo:'
  label.className = `
    text-sm
    text-gray-600
  `

  return label
}

export { createLabel }
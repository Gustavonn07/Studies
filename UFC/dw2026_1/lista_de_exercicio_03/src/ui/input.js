const createInput = ({ placeholder, id, type, required, name }) => {

  const input = document.createElement('input')
  input.required = required
  input.type = type
  input.name = name ?? id
  input.id = id
  input.placeholder = placeholder ?? 'Digite algo:'
  input.className = `
    w-full
    border
    border-gray-300
    rounded-lg
    px-3
    py-2
    focus:outline-none
    focus:ring-2
    focus:ring-blue-500
  `

  return input
}

export { createInput }
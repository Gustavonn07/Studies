const createSelect = ({ id }) => {
  const select = document.createElement('select')
  select.id = id
  select.required = true

  const options = [
    { value: '', text: 'Selecione uma opção' },
    { value: '1', text: 'Opção 1' },
    { value: '2', text: 'Opção 2' },
  ]

  options.forEach(opt => {
    const option = document.createElement('option')
    option.value = opt.value
    option.textContent = opt.text
    select.appendChild(option)
  })

  return select
}

export {
  createSelect
}
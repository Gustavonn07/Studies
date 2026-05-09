const countChecked = ({ checkboxes, resultText }) => {
  const total = checkboxes.filter(cb => cb.checked).length

  resultText.textContent = `Selecionados: ${total}`

  return total
}

export { countChecked }
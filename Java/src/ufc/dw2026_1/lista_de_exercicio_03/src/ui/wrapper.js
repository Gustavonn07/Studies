const createWrapper = (renderFn) => {

  const wrapper = document.createElement('div')
  wrapper.className = `
    min-h-screen
    w-full
    flex
    flex-col
    items-center
    justify-center
    bg-gray-100
    gap-8
  `

  const content = renderFn()
  wrapper.appendChild(content)

  return wrapper
}

export { createWrapper }
import { pageUtils, routes } from "../shared/index.js"

const createForm = ({ children, handler, nextPage }) => {
  const form = document.createElement('form')

  const title = document.createElement('h1')

  const getTitleNumber = () => {
    let value = 0;

    if(nextPage) {
      value = nextPage

    } else {
      value = routes.length
    }

    return value;
  }

  title.textContent = 'Formulário 0' + getTitleNumber()
  title.className = `
    text-xl
    font-semibold
    text-gray-800
    text-center
  `

  form.className = `
    w-full max-w-md
    mx-auto
    bg-white
    shadow-md
    rounded-xl
    p-6
    flex
    flex-col
    gap-4
    mt-10
  `

  form.appendChild(title)
  form.appendChild(children)

  form.addEventListener('submit', (e) => {
    e.preventDefault()

    const isValid = handler()

    if (!isValid) return

    if (nextPage) {
      pageUtils.setPage(nextPage)

    } else {
      pageUtils.resetPage()
    }
  })

  return form
}

export {
  createForm
}
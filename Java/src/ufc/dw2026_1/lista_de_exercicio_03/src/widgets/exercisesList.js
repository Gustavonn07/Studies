import { pageUtils, routes } from "../shared/index.js"

const exerciseList = () => {
  const list = document.createElement('ul')

  list.className = `
    flex
    items-center
    justify-center
    gap-2
    bg-gray-100
    mt-auto
    mb-10
  `

  routes.map(route => {
    const li = document.createElement('li')

    const button = document.createElement('button')
    button.textContent = route.label

    button.className = `
      w-24
      bg-white
      text-gray-800
      font-medium
      py-3
      px-2
      rounded-xl
      shadow
      hover:bg-blue-600
      hover:text-white
      transition
    `

    button.addEventListener('click', () => {
      pageUtils.setPage(route.page)
    })

    li.appendChild(button)
    list.appendChild(li)
  })

  return list
}

export {
  exerciseList
}
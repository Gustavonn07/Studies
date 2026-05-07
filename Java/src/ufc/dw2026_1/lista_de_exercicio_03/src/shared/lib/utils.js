import { routeConstants, routes } from "../config/index.js"

class PageUtils {
  #page = routeConstants.EXERCISE_01
  #renderList = []

  #executeRender() {
    this.#renderList.forEach(render => render(this.#page))
  }

  getPage() {
    return this.#page
  }

  setPage(routeConstant) {
    if (this.#page === routeConstant) return

    this.#page = routeConstant
    this.#executeRender()
  }

  getPageRender() {
    const route = routes.find(route => route.page === this.#page)
    return route?.render
  }

  addRender(render) {
    this.#renderList.push(render)

    return () => {
      this.#renderList = this.#renderList.filter(l => l !== render)
    }
  }
}

const pageUtils = new PageUtils()

export { pageUtils }
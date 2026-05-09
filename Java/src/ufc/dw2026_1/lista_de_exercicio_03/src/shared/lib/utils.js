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
  resetPage() {
    this.#page = routeConstants.EXERCISE_01
    this.#executeRender()
  }

  clearRenders() {
    this.#renderList = []
  }
}

const pageUtils = new PageUtils()

export { pageUtils }
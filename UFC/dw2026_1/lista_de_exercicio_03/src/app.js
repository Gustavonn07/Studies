import { exercise01Page } from "./pages/index.js";
import { pageUtils } from "./shared/index.js";
import { createWrapper } from "./index.js";
import { exerciseList } from "./widgets/exercisesList.js";

const root = document.getElementById('root');

let isRendering = false

function render() {
  if (isRendering) return
  isRendering = true

  root.innerHTML = ''

  const wrapper = createWrapper(pageUtils.getPageRender())
  wrapper.appendChild(exerciseList())
  root.appendChild(wrapper)

  isRendering = false
}

pageUtils.addRender(render)

render()

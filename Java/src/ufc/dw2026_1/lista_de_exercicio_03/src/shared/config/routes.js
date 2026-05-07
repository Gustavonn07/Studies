import { exercise01Page, exercise02Page, exercise03Page, exercise04Page, exercise05Page, exercise06Page, exercise07Page, exercise08Page } from "../../pages/index.js"

const routeConstants = {
  EXERCISE_01: 0,
  EXERCISE_02: 1,
  EXERCISE_03: 2,
  EXERCISE_04: 3,
  EXERCISE_05: 4,
  EXERCISE_06: 5,
  EXERCISE_07: 6,
  EXERCISE_08: 7,
}

const routes = [
  {
    page: routeConstants.EXERCISE_01,
    render: () => exercise01Page(),
    label: 'Ex 01'
  },
  {
    page: routeConstants.EXERCISE_02,
    render: () => exercise02Page(),
    label: 'Ex 02'
  },
  {
    page: routeConstants.EXERCISE_03,
    render: () => exercise03Page(),
    label: 'Ex 03'
  },
  {
    page: routeConstants.EXERCISE_04,
    render: () => exercise04Page(),
    label: 'Ex 04'
  },
  {
    page: routeConstants.EXERCISE_05,
    render: () => exercise05Page(),
    label: 'Ex 05'
  },
  {
    page: routeConstants.EXERCISE_06,
    render: () => exercise06Page(),
    label: 'Ex 06'
  },
  {
    page: routeConstants.EXERCISE_07,
    render: () => exercise07Page(),
    label: 'Ex 07'
  },
  {
    page: routeConstants.EXERCISE_08,
    render: () => exercise08Page(),
    label: 'Ex 08'
  },
]

export { routes, routeConstants }
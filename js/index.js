import { categories, courseCombinations } from './courses'
import '../css/style.scss'
const courseContainerDIV = document.querySelector('.course-container')
let selectedCourses = []

// create cours dom elements
// Object.values(categories).flat().forEach(createCourseElement)

function createCourseElement(course) {
  const element = document.createElement('div')
  element.className = 'course'
  element.id = course
  element.innerHTML = `<span class="course-name">${course}</span>`
  courseContainerDIV.appendChild(element)
  element.addEventListener('click', eventHandler)
}

function eventHandler(event) {
  const element =
    event.target.id !== '' ? event.target : event.target.parentNode
  const course = element.id

  // cancel if disabled
  if (element.classList.contains('disabled')) return

  // toggle selection
  if (!element.classList.contains('selected')) {
    element.classList.add('selected')
    selectedCourses.push(course)
  } else {
    element.classList.remove('selected')
    selectedCourses.splice(selectedCourses.indexOf(course), 1)
  }

  // get further possibilities
  const possibilities = findCoursePossibilties(selectedCourses)
  // disabled other items
  courseContainerDIV.querySelectorAll('.course').forEach((el) => {
    if (!possibilities.includes(el.id) && !el.classList.contains('selected'))
      el.classList.add('disabled')
    else el.classList.remove('disabled')
  })
}

function findCoursePossibilties(selectedCourses) {
  // convert given courses to categories
  const selectedCategories = selectedCourses.map((course) =>
    getCategory(course)
  )
  // search for possibilities
  const possibleCategoryCombinatinons = courseCombinations.map(
    (courseCombination) => {
      // get categories of maped combi
      const combinationCategory = courseCombination.map((combi) =>
        getCategory(combi[0])
      )
      // check if combi matches
      const matched = selectedCategories.every((category) => {
        if (combinationCategory.includes(category)) {
          combinationCategory.splice(combinationCategory.indexOf(category), 1)
          return true
        }
      })
      if (matched)
        return combinationCategory
          .map((category) => categories[category])
          .flat()
    }
  )
  return [...new Set(possibleCategoryCombinatinons.flat().filter((n) => n))]
}

function getCategory(course) {
  return Object.entries(categories).filter(([category, courses]) =>
    courses.includes(course)
  )[0][0]
}

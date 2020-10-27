import { courseCombinations, subjectAreas } from './courses'
import './style.scss'

const courseContainerDIV = document.querySelector('main')
const selectedCourses = []

/**
 * Search for futher possible courses
 * @param {string[]} selectedCourses Selected courses
 *
 * @returns {string[]} Possible courses
 */
function findCoursePossibilties() {
  // convert given courses to categories
  let possibleFurtherCourses = []

  courseCombinations.forEach((combination) => {
    // delete refference
    const COMBINATION_NO_REF = [...combination]
    // check if all items of selectedCourses are included and throw out the selected course-categories
    const includesSelectedCourses = selectedCourses.every((course) => {
      return COMBINATION_NO_REF.some((combinationCategory, index) => {
        // check if course is included in one category and then delete category to prevent double matching same category
        if (combinationCategory.includes(course)) {
          COMBINATION_NO_REF.splice(index, 1)
          return true
        }
        return false
      })
    })
    // add courses if combination matches
    if (includesSelectedCourses)
      possibleFurtherCourses.push(...COMBINATION_NO_REF.flat())
  })
  // remove duplicates
  possibleFurtherCourses = [
    ...new Set(possibleFurtherCourses),
    ...selectedCourses
  ]

  return possibleFurtherCourses
}

/**
 *  Creates HTML-Element with given parameters
 *
 * @param {object} config - Configuration of Element
 * @param {HTMLElement} config.parentChild - HTML-Container of element
 * @param {string} [config.id] - Id of element
 * @param {string} [config.className] - Css-Class of element
 * @param {string} [config.innerHTML] - Inner HTML of element
 *
 * @returns {HTMLElement} Created HTML-Element
 */
function createElement(config) {
  const element = document.createElement('div')
  if (config.id) element.id = config.id
  if (config.className) element.className = config.className
  if (config.innerHTML) element.innerHTML = config.innerHTML
  config.parentChild.appendChild(element)

  return element
}

/**
 *  Toggle selection and rerender view
 * @param {HTMLElement} element Clicked course element
 */
function selectElement(element) {
  const currentCourse = element.id

  // cancel if disabled
  if (element.classList.contains('disabled')) return

  // toggle selection
  if (!element.classList.contains('selected')) {
    element.classList.add('selected')
    selectedCourses.push(currentCourse)
  } else {
    element.classList.remove('selected')
    selectedCourses.splice(selectedCourses.indexOf(currentCourse), 1)
  }

  // get further possibilities
  const possibilities = findCoursePossibilties(selectedCourses)
  // disable or enable courses based on futher possibilities
  document.querySelectorAll('.course').forEach((courseElement) => {
    const COURSE_OF_ELEMENT = courseElement.id
    if (possibilities.includes(COURSE_OF_ELEMENT)) {
      courseElement.classList.remove('disabled')
    } else {
      courseElement.classList.add('disabled')
    }
  })
}

// add courses to dom
Object.entries(subjectAreas).forEach(
  ([subjectArea, correspondingCategories]) => {
    // create general-category component
    const subjectAreaElement = createElement({
      className: 'category',
      parentChild: courseContainerDIV
    })
    // add label
    createElement({
      innerHTML: subjectArea,
      className: 'label',
      parentChild: subjectAreaElement
    })
    // add course-container
    const courseContainer = createElement({
      className: 'courses',
      parentChild: subjectAreaElement
    })
    // add courses to container
    correspondingCategories.flat().forEach((course) => {
      const courseElement = createElement({
        id: course,
        className: 'course',
        innerHTML: `<span class="course-name">${course}</span>`,
        parentChild: courseContainer
      })
      courseElement.onclick = () => selectElement(courseElement)
    })
  }
)

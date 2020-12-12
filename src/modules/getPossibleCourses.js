import { courseCombinations } from "./courses";

/**
 * Search for futher possible courses
 * @param {string[]} selectedCourses Selected courses
 *
 * @returns {string[]} Possible courses
 */
function getPossibleCourses(selectedCourses) {
  // convert given courses to categories
  let possibleFurtherCourses = [];

  courseCombinations.forEach((combination) => {
    // delete refference
    const COMBINATION_NO_REF = [...combination];
    // check if all items of selectedCourses are included and throw out the selected course-categories
    const includesSelectedCourses = selectedCourses.every((course) =>
      COMBINATION_NO_REF.some((combinationCategory, index) => {
        // check if course is included in one category and then delete category to prevent double matching same category
        if (combinationCategory.includes(course)) {
          COMBINATION_NO_REF.splice(index, 1);
          return true;
        }
        return false;
      })
    );
    // add courses if combination matches
    if (includesSelectedCourses)
      possibleFurtherCourses.push(...COMBINATION_NO_REF.flat());
  });
  // remove duplicates
  possibleFurtherCourses = [
    ...new Set(possibleFurtherCourses),
    ...selectedCourses,
  ];

  return possibleFurtherCourses;
}

export default getPossibleCourses;

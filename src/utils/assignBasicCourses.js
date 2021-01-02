import { BASIC_COURSES, CATEGORIES } from "./courses";

import { getCourseCombination } from "./getCourseCombination";

/**
 * Reviews which courses may no longer be selected.
 * @param {string[]} basicCourses Already selected basic courses
 * @param {string[]} advancedCourses Already selected advanced courses
 * @returns {[string[], string[], string | undefined]} Disabled courses
 */
function assignBasicCourses(basicCourses, advancedCourses) {
  const { mandatoryBasicCourseCategories } = getCourseCombination(
    advancedCourses
  )[0];
  /**
   * Searches for indices of categories in which the course is included.
   * @param {string} basicCourse Course to search for
   */
  function getCategoryIndicesOfCourse(basicCourse) {
    return mandatoryBasicCourseCategories
      .map((category) =>
        category.flat().includes(basicCourse)
          ? mandatoryBasicCourseCategories.indexOf(category)
          : undefined
      )
      .filter((n) => n !== undefined);
  }
  // Creates copy of mandatory basic course categories to be applied later to these categories
  const occupiedCourses = new Array(mandatoryBasicCourseCategories.length).fill(
    undefined
  );
  let volunartyCourse;

  // Sorts selected courses forward and deletes duplicates
  const allBasicCoursesSorted = [
    ...new Set([...basicCourses, ...BASIC_COURSES]),
  ];
  let disabledCourses = [...advancedCourses];
  const religionslehreSelected = basicCourses.some((course) =>
    CATEGORIES.Religionslehre.BasicCourses.includes(course)
  );
  let kuenstlerischesFachAssigned = false;

  // auto-disable "Gesellschaftswissenschaftliches Fach"
  if (
    advancedCourses.includes("Erdkunde") ||
    advancedCourses.includes("Sozialkunde")
  ) {
    disabledCourses.push("Sozialkunde/ Erdkunde");
  }

  // mark "Gesellschaftswissenschaftliches Fach" as occupied
  const indexGesellschaftwissenschaftlichesFach = getCategoryIndicesOfCourse(
    "Geschichte"
  );
  occupiedCourses[indexGesellschaftwissenschaftlichesFach] =
    "Gesellschaftswissenschaftliches Fach";
  allBasicCoursesSorted.forEach((course) => {
    if (
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses.includes(
        course
      )
    )
      return;

    const selectedBasicCourse = basicCourses.includes(course);
    const categoryIndicesOfCourse = getCategoryIndicesOfCourse(course);
    const isKuenstlerischesFach = CATEGORIES[
      "Künstlerisches Fach"
    ].BasicCourses.includes(course);
    let assigned = false;

    if (
      CATEGORIES.Religionslehre.BasicCourses.includes(course) &&
      !selectedBasicCourse &&
      religionslehreSelected
    ) {
      disabledCourses.push(course);
    }
    if (isKuenstlerischesFach && selectedBasicCourse) {
      // check if already assigned
      const assignedCourse = occupiedCourses[categoryIndicesOfCourse[0]];

      if (assignedCourse) {
        volunartyCourse = course;
      } else {
        occupiedCourses[categoryIndicesOfCourse[0]] = course;
      }
      kuenstlerischesFachAssigned = true;
    }

    categoryIndicesOfCourse.forEach((id) => {
      // check if course is already assigned
      if (!assigned) {
        assigned = !occupiedCourses[id];
        // assign course if possible
        if (!occupiedCourses[id] && selectedBasicCourse) {
          occupiedCourses[id] = course;
          assigned = true;
        }
      }
    });

    if (!assigned) {
      // if the course is selected but cannot be assigned to a cateogy, apply voluntary course
      if (selectedBasicCourse) {
        assigned = true;
        if (isKuenstlerischesFach) kuenstlerischesFachAssigned = true;
        else volunartyCourse = course;
      } else if (
        (volunartyCourse || !kuenstlerischesFachAssigned) &&
        !CATEGORIES.Religionslehre.BasicCourses.includes(course) &&
        !isKuenstlerischesFach
      )
        disabledCourses.push(course);
    }

    if (
      isKuenstlerischesFach &&
      volunartyCourse &&
      kuenstlerischesFachAssigned &&
      !assigned
    ) {
      disabledCourses.push(course);
    }
  });

  // remove duplicates
  disabledCourses = [...new Set(disabledCourses)];

  return [disabledCourses, occupiedCourses, volunartyCourse];
}

export default assignBasicCourses;

import COURSE_COMBINATIONS from "./courseCombinations";

/**
 * @typedef {Object} CourseCombination
 * @property {number} id ID of combination
 * @property {string[][]} advancedCourses Advanced courses of this combination
 * @property {string[] | string[][]} mandatoryBasicCourses Mandatory basic courses of this combination
 * @property {number} mandatoryWeeklyHours Mandatory weekly hours of this combination
 */

/**
 * Checks, if group of categories (cluster) contains all given courses
 * @param {string[]} courses Courses to be reviewed
 * @param {string[][]} cluster Group of categories
 *
 * @returns {[boolean, string[][]} Whether cluster contains courses and non-contains categories of the cluster
 */
function isIncludedInCluster(courses, cluster) {
  const isIncluded = courses.every((course) =>
    cluster.some((category, index) => {
      if (category.includes(course)) {
        cluster.splice(index, 1);
        return true;
      }
      return false;
    })
  );

  return [isIncluded, cluster];
}

/**
 * Searches for course-combination, based on given advanced-courses
 * @param {string[]} advancedCourses Selected advanced-courses
 * @returns {CourseCombination[]} Course-combination
 */
function getCourseCombination(advancedCourses) {
  const matchingCombinations = [];

  COURSE_COMBINATIONS.forEach((combination) => {
    // delete refference
    const CLUSTER = [...combination.advancedCourses];

    const [includesSelectedCourses] = isIncludedInCluster(
      advancedCourses,
      CLUSTER
    );
    // add courses if combination matches
    if (includesSelectedCourses) matchingCombinations.push(combination);
  });

  return matchingCombinations;
}

export { getCourseCombination, isIncludedInCluster };

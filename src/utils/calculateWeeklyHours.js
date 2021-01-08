import {
  CATEGORIES,
  NUMBER_OF_HOURS_ADVANCED_COURSES,
  NUMBER_OF_HOURS_BASIC_COURSES,
} from "./courses";

function calculateWeeklyHours(advancedCourses, basicCourses) {
  let weeklyHours = 0;

  [...advancedCourses, ...basicCourses].forEach((course) => {
    const courseType = advancedCourses.includes(course) ? "advanced" : "basic";
    const dedicatedArray =
      courseType === "advanced"
        ? NUMBER_OF_HOURS_ADVANCED_COURSES
        : NUMBER_OF_HOURS_BASIC_COURSES;

    // find the weekly-hours-category in which the course is included
    const [, weeklyHoursOfCourse] = dedicatedArray.find(([courses]) =>
      courses.includes(course)
    );
    weeklyHours += weeklyHoursOfCourse;
  });
  return weeklyHours;
}

export default calculateWeeklyHours;

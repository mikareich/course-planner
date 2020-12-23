import React, { useContext, useEffect } from "react";
import CourseItem from "../components/CourseItem";
import { ADVANCED_COURSES, SUBJECT_AREAS } from "../utils/courses";
import Category from "../components/Category";
import { CourseContext } from "../components/CourseContext";
import {
  getCourseCombination,
  isIncludedInCluster,
} from "../utils/getCourseCombination";

function AdvancedCourses() {
  const {
    advancedCourses: selectedAdvancedCourses,
    setDisabledAdvancedCourses,
    setSelectedCombination,
  } = useContext(CourseContext);

  useEffect(() => {
    const matchingCombinations = getCourseCombination(selectedAdvancedCourses);
    // disable impossible courses
    const possibleAdvancedCourses = matchingCombinations
      .map(({ advancedCourses }) => {
        const [
          ,
          unusedCategories,
        ] = isIncludedInCluster(selectedAdvancedCourses, [...advancedCourses]);

        return unusedCategories.flat();
      })
      .flat();

    const disabledCourses = ADVANCED_COURSES.filter(
      (course) =>
        !selectedAdvancedCourses.includes(course) &&
        !possibleAdvancedCourses.includes(course)
    );
    setDisabledAdvancedCourses(disabledCourses);

    // set matching combination
    if (matchingCombinations.length === 1) {
      setSelectedCombination(matchingCombinations[0]);
    } else {
      setSelectedCombination(null);
    }
  }, [selectedAdvancedCourses]);

  return (
    <div className="advancedCourses">
      {Object.entries(SUBJECT_AREAS).map(([subject, coursesObject]) => {
        const courses = (coursesObject.AdvancedCourses || coursesObject).flat();
        return (
          <Category label={subject} key={subject}>
            {courses.flat().map((course) => (
              <CourseItem name={course} type="advanced-course" key={course} />
            ))}
          </Category>
        );
      })}
    </div>
  );
}

export default AdvancedCourses;

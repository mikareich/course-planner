import React, { useContext, useEffect } from "react";
import CourseItem from "../components/CourseItem";
import { subjectAreas } from "../modules/courses";
import Category from "../components/Category";
import { CourseContext } from "../components/CourseContext";
import {
  getCourseCombination,
  isIncludedInCluster,
} from "../modules/getCourseCombination";

const allAdvancedCourses = Object.entries(subjectAreas)
  .map(([, courses]) => courses.Leistungskurs || courses)
  .flat(2);

function AdvancedCourses() {
  const { advancedCourses, setDisabledCourses } = useContext(CourseContext);

  useEffect(() => {
    const matchingCombinations = getCourseCombination(advancedCourses);
    const possibleAdvancedCourses = matchingCombinations
      .map(({ leistungskurse }) => {
        const [, unusedCategories] = isIncludedInCluster(advancedCourses, [
          ...leistungskurse,
        ]);

        return unusedCategories.flat();
      })
      .flat();
    const disabledCourses = allAdvancedCourses.filter(
      (course) =>
        !advancedCourses.includes(course) &&
        !possibleAdvancedCourses.includes(course)
    );
    setDisabledCourses(disabledCourses);
  }, [advancedCourses]);

  return (
    <div className="advancedCourses">
      {Object.entries(subjectAreas).map(([subject, coursesObject]) => {
        const courses = (coursesObject.Leistungskurs || coursesObject).flat();
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

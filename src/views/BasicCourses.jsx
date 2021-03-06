import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import {
  CATEGORIES,
  SINGLE_COURSE_CATEGORIES,
  SUBJECT_AREAS,
} from "../utils/courses";
import Category from "../components/Category";
import CourseItem from "../components/CourseItem";
import { CourseContext } from "../components/CourseContext";
import assignBasicCourses from "../utils/assignBasicCourses";

function BasicCourses() {
  const history = useHistory();
  const {
    advancedCourses,
    selectedCombination,
    basicCourses,
    setBasicCourses,
    setDisabledBasicCourses,
    setValidRoutes,
  } = useContext(CourseContext);

  const [mandatoryBasicCourses, setMandatoryBasicCourses] = useState([]);

  // RESET HOOKS
  useEffect(() => {
    if (advancedCourses.length !== 3) {
      setValidRoutes(["/leistungskurse"]);
      history.push("/leistungskurse");
      return;
    }
    // auto-select mandatory scc (see readme)
    const mandatorySCC = selectedCombination.mandatoryBasicCourseCategories.filter(
      (category) => SINGLE_COURSE_CATEGORIES.includes(category)
    );
    const mandatoryCourses = [...mandatorySCC.flat()];
    // auto-select "Gesellschaftswissenschaftliches Fach"
    if (
      advancedCourses.includes("Erdkunde") ||
      advancedCourses.includes("Sozialkunde")
    ) {
      mandatoryCourses.push("Geschichte");
    } else if (advancedCourses.includes("Geschichte")) {
      mandatoryCourses.push("Sozialkunde/ Erdkunde");
      // 'Geschichte' is already disabled because its selected as advanced course
    } else {
      mandatoryCourses.push("Geschichte");
      mandatoryCourses.push("Sozialkunde/ Erdkunde");
    }

    setDisabledBasicCourses(assignBasicCourses([], advancedCourses));

    setMandatoryBasicCourses(mandatoryCourses);
    setBasicCourses(mandatoryCourses);
  }, [selectedCombination]);

  useEffect(() => {
    const [
      disabledCourses,
      occupiedCourses,
      voluntaryCourse,
    ] = assignBasicCourses(basicCourses, advancedCourses);
    setDisabledBasicCourses(() => disabledCourses);
    const allCoursesOccupied =
      occupiedCourses.every((n) => n) &&
      [...occupiedCourses, voluntaryCourse].some((c) =>
        CATEGORIES["Künstlerisches Fach"].BasicCourses.includes(c)
      );
    if (allCoursesOccupied) {
      setValidRoutes(["/leistungskurse", "/grundkurse", "/ueberblick"]);
    } else {
      setValidRoutes(["/leistungskurse", "/grundkurse"]);
    }
  }, [basicCourses]);

  return (
    <div className="basicCourses">
      <div className="advancedCourses">
        {Object.entries(SUBJECT_AREAS).map(([subject, coursesObject]) => {
          const courses = (coursesObject.BasicCourses || coursesObject).flat();
          return (
            <Category label={subject} key={subject}>
              {courses.flat().map((course) => (
                <CourseItem
                  name={course}
                  type="basic-course"
                  mandatory={mandatoryBasicCourses.includes(course)}
                  key={course}
                />
              ))}
            </Category>
          );
        })}
      </div>
    </div>
  );
}

export default BasicCourses;

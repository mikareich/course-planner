import React, { useContext, useEffect, useState } from "react";
import { SUBJECT_AREAS } from "../utils/courses";
import Category from "../components/Category";
import CourseItem from "../components/CourseItem";
import { CourseContext } from "../components/CourseContext";

function BasicCourses() {
  const {
    advancedCourses,
    selectedCombination,
    basicCourses,
    setBasicCourses,
    setDisabledBasicCourses,
  } = useContext(CourseContext);

  const [allBasicCoursesSelected, setAllBasicCoursesSelected] = useState(false);

  const getClearMandatoryCourses = () =>
    selectedCombination.mandatoryBasicCourses
      .map((category) => (category.length === 1 ? category[0] : undefined))
      .filter((n) => n);
  const [mandatoryBasicCourses, setMandatoryBasicCourses] = useState([]);

  // checks "Gesellschaftswissenschaftliches Fächer" and auto-select clear mandatory courses
  useEffect(() => {
    let courses;
    if (advancedCourses.includes("Geschichte")) {
      courses = [...getClearMandatoryCourses(), "Sozialkunde/ Erdkunde"];
    } else if (
      advancedCourses.includes("Erdkunde") ||
      advancedCourses.includes("Sozialkunde")
    ) {
      courses = [...getClearMandatoryCourses(), "Geschichte"];
    } else {
      courses = [
        ...getClearMandatoryCourses(),
        "Geschichte",
        "Sozialkunde/ Erdkunde",
      ];
    }
    setBasicCourses(courses);
    setMandatoryBasicCourses(courses);
  }, [selectedCombination]);

  // disable selected advanced courses
  useEffect(() => {
    setDisabledBasicCourses([...advancedCourses]);
  }, [selectedCombination]);

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

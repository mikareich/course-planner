import React, { createContext, useEffect, useState } from "react";
import { allCourses } from "../modules/courses";
import getPossibleCourses from "../modules/getPossibleCourses";

const courseContext = createContext();

function CourseProvider({ children }) {
  const [disabledCourses, setDisabledCourses] = useState(allCourses);
  const [selectedCourses, setSelectedCourses] = useState([]);

  function selectCourse(name) {
    setSelectedCourses((courses) => [...courses, name]);
  }

  function unselectCourse(name) {
    setSelectedCourses((courses) => courses.splice(courses.indexOf(name), 1));
  }

  useEffect(() => {
    const possibleCourses = getPossibleCourses(selectedCourses);
    setDisabledCourses(
      allCourses.filter((course) => !possibleCourses.includes(course))
    );
  }, [selectedCourses]);

  return (
    <courseContext.Provider
      value={{ disabledCourses, selectCourse, unselectCourse }}
    >
      {children}
    </courseContext.Provider>
  );
}

export { CourseProvider, courseContext };

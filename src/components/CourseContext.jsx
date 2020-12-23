import React, { createContext, useState } from "react";
import { CATEGORIES } from "../utils/courses";

const CourseContext = createContext();

function CourseProvider({ children }) {
  const [advancedCourses, setAdvancedCourses] = useState([]);
  const [basicCourses, setBasicCourses] = useState([]);
  const [disabledCourses, setDisabledCourses] = useState([]);
  // TODO: set default value to null in production
  const [selectedCombination, setSelectedCombination] = useState({
    id: 14,
    advancedCourses: [
      CATEGORIES.Mathematik,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourses: [
      CATEGORIES.Deutsch,
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  });

  const toggleCourse = (type, name) => {
    const associatedArray =
      type === "advanced-course" ? advancedCourses : basicCourses;
    const associatedDispatcher =
      type === "advanced-course" ? setAdvancedCourses : setBasicCourses;

    if (associatedArray.includes(name)) {
      // remove course from array
      const courseIndex = associatedArray.indexOf(name);
      associatedArray.splice(courseIndex, 1);
      associatedDispatcher([...associatedArray]);
    } else {
      // add course
      associatedDispatcher([...associatedArray, name]);
    }
  };

  return (
    <CourseContext.Provider
      value={{
        advancedCourses,
        basicCourses,
        disabledCourses,
        setDisabledCourses,
        toggleCourse,
        selectedCombination,
        setSelectedCombination,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export { CourseProvider, CourseContext };

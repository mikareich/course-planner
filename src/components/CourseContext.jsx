import React, { createContext, useState } from "react";
import { CATEGORIES } from "../utils/courses";

const CourseContext = createContext();

function CourseProvider({ children }) {
  const [advancedCourses, setAdvancedCourses] = useState([
    "Englisch",
    "Mathematik",
    "Deutsch",
  ]);
  const [basicCourses, setBasicCourses] = useState([
    "Sport",
    "Geschichte",
    "Sozialkunde/ Erdkunde",
    "Bildende Kunst",
    "Ethik",
    "Physik",
    "Chemie",
    "Informatik",
  ]);
  const [disabledAdvancedCourses, setDisabledAdvancedCourses] = useState([]);
  const [disabledBasicCourses, setDisabledBasicCourses] = useState([]);
  const [selectedCombination, setSelectedCombination] = useState({
    id: 0,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
      CATEGORIES.Deutsch,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  });
  const [voluntaryCourse, setVoluntaryCourse] = useState(null);

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
        setBasicCourses,
        disabledAdvancedCourses,
        setDisabledAdvancedCourses,
        disabledBasicCourses,
        setDisabledBasicCourses,
        toggleCourse,
        selectedCombination,
        setSelectedCombination,
        voluntaryCourse,
        setVoluntaryCourse,
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export { CourseProvider, CourseContext };

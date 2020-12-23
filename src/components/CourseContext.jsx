import React, { createContext, useState } from "react";
import { CATEGORIES } from "../utils/courses";

const CourseContext = createContext();

function CourseProvider({ children }) {
  const [advancedCourses, setAdvancedCourses] = useState([]);
  const [basicCourses, setBasicCourses] = useState([]);
  const [disabledAdvancedCourses, setDisabledAdvancedCourses] = useState([]);
  const [disabledBasicCourses, setDisabledBasicCourses] = useState([]);
  const [selectedCombination, setSelectedCombination] = useState(null);

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
      }}
    >
      {children}
    </CourseContext.Provider>
  );
}

export { CourseProvider, CourseContext };

import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "./CourseContext";

function CourseItem({ name, type, mandatory }) {
  const {
    disabledAdvancedCourses,
    disabledBasicCourses,
    toggleCourse,
    basicCourses,
    advancedCourses,
  } = useContext(CourseContext);

  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    const isIncluded =
      type === "advanced-course"
        ? advancedCourses.includes(name)
        : basicCourses.includes(name);
    setSelected(isIncluded);
  }, [basicCourses, advancedCourses]);

  useEffect(() => {
    const isIncluded =
      type === "advanced-course"
        ? disabledAdvancedCourses.includes(name)
        : disabledBasicCourses.includes(name);
    setDisabled(isIncluded);
  }, [disabledAdvancedCourses, disabledBasicCourses]);

  return (
    <button
      className={`course-item 
      ${selected ? "selected" : ""} ${disabled ? "disabled" : ""} ${
        mandatory ? "mandatory" : ""
      }`}
      type="button"
      onClick={() => !disabled && !mandatory && toggleCourse(type, name)}
    >
      <span className="name">{name}</span>
    </button>
  );
}

export default CourseItem;

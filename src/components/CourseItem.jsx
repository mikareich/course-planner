import React, { useContext, useEffect, useState } from "react";
import { CourseContext } from "./CourseContext";

function CourseItem({ name, type }) {
  const { disabledCourses, toggleCourse } = useContext(CourseContext);

  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState(false);

  const selectCourse = () => {
    if (disabled) return;

    setSelected(!selected);
    toggleCourse(type, name);
  };

  useEffect(() => {
    const isDisabled = disabledCourses.includes(name);

    setDisabled(isDisabled);
  }, [disabledCourses]);

  return (
    <button
      className={`course-item 
      ${selected && "selected"} ${disabled && "disabled"}`}
      type="button"
      onClick={selectCourse}
    >
      <span className="name">{name}</span>
    </button>
  );
}

export default CourseItem;

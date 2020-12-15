import React, { useContext, useEffect, useState } from "react";
import { courseContext } from "./CourseContext";

function CourseItem({ name }) {
  const { disabledCourses, selectCourse, unselectCourse } = useContext(
    courseContext
  );
  const [disabled, setDisabled] = useState(false);
  const [selected, setSelected] = useState(false);

  // disable when listet as disabled
  useEffect(() => setDisabled(disabledCourses.includes(name)), [
    disabledCourses,
  ]);

  // toggle selection
  const toggleCourse = () => {
    if (disabled) return;
    setSelected(!selected);

    if (selected) {
      unselectCourse(name);
    } else {
      selectCourse(name);
    }
  };

  return (
    <button
      className={`course-item 
      ${selected && "selected"} ${disabled && "disabled"}`}
      type="button"
      onClick={toggleCourse}
    >
      <span className="name">{name}</span>
    </button>
  );
}

export default CourseItem;

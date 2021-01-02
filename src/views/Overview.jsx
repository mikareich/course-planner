import React, { useContext } from "react";
import Category from "../components/Category";
import { CourseContext } from "../components/CourseContext";
import CourseItem from "../components/CourseItem";
import calculateWeeklyHours from "../utils/calculateWeeklyHours";

function Overview() {
  const { basicCourses, advancedCourses, selectedCombination } = useContext(
    CourseContext
  );

  return (
    <div className="overview">
      <Category label="Gewählte Leistungskurse">
        {advancedCourses.map((course) => (
          <CourseItem type="overview" mandatory name={course} />
        ))}
      </Category>
      <Category label="Gewählte Grundkurse">
        {basicCourses.map((course) => (
          <CourseItem type="overview" mandatory name={course} />
        ))}
      </Category>
      <Category label="Stunden pro Woche">
        <h2>{calculateWeeklyHours(advancedCourses, basicCourses)}</h2>
      </Category>
    </div>
  );
}

export default Overview;

import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Category from "../components/Category";
import { CourseContext } from "../components/CourseContext";
import CourseItem from "../components/CourseItem";
import calculateWeeklyHours from "../utils/calculateWeeklyHours";

function Overview() {
  const { basicCourses, advancedCourses } = useContext(CourseContext);
  const history = useHistory();
  const { setValidRoutes } = useContext(CourseContext);
  if (basicCourses.length === 0 && advancedCourses.length === 0) {
    history.push("/leistungskurse");
    setValidRoutes(["/leistungskurse"]);
  }

  return (
    <div className="overview">
      <Category label="Gewählte Leistungskurse">
        {advancedCourses.map((course) => (
          <CourseItem type="overview" key={course} mandatory name={course} />
        ))}
      </Category>
      <Category label="Gewählte Grundkurse">
        {basicCourses.map((course) => (
          <CourseItem type="overview" key={course} mandatory name={course} />
        ))}
      </Category>
      <Category label="Stunden pro Woche">
        <h2>{calculateWeeklyHours(advancedCourses, basicCourses)}</h2>
      </Category>
    </div>
  );
}

export default Overview;

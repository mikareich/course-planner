import React from "react";
import { CourseProvider } from "./CourseContext";
import CourseItem from "./CourseItem";
import { allCourses } from "./courses";

function App() {
  return (
    <div className="App">
      <CourseProvider>
        {allCourses.map((course) => (
          <CourseItem name={course} key={course} />
        ))}
      </CourseProvider>
    </div>
  );
}

export default App;

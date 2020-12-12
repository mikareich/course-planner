import React from "react";
import { CourseProvider } from "../components/CourseContext";
import CourseItem from "../components/CourseItem";
import { allCourses } from "../modules/courses";

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

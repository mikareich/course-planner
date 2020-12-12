import React from "react";
import Category from "../components/Category";
import { CourseProvider } from "../components/CourseContext";
import CourseItem from "../components/CourseItem";
import { subjectAreas } from "../modules/courses";

function App() {
  return (
    <div className="App">
      <CourseProvider>
        {
          // display categories with dedicated courses
          Object.entries(subjectAreas).map(([subject, courses]) => (
            <Category label={subject} key={subject}>
              {
                // display courses
                courses.map((courseName) => (
                  <CourseItem name={courseName} key={courseName} />
                ))
              }
            </Category>
          ))
        }
      </CourseProvider>
    </div>
  );
}

export default App;

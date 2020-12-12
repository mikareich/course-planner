import React from "react";
import Category from "../components/Category";
import { CourseProvider } from "../components/CourseContext";
import CourseItem from "../components/CourseItem";
import { subjectAreas } from "../modules/courses";

function App() {
  return (
    <div className="App">
      <CourseProvider>
        <header className="header" />

        <main className="main">
          {
            // display categories with dedicated courses
            Object.entries(subjectAreas).map(([subject, courses]) => (
              <Category label={subject} key={subject}>
                {
                  // display courses
                  courses.flat().map((courseName) => (
                    <CourseItem name={courseName} key={courseName} />
                  ))
                }
              </Category>
            ))
          }
        </main>

        <footer className="footer" />
      </CourseProvider>
    </div>
  );
}

export default App;

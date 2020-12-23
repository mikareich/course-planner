import React from "react";
import { SUBJECT_AREAS } from "../utils/courses";
import Category from "../components/Category";
import CourseItem from "../components/CourseItem";

function BasicCourses() {
  return (
    <div className="basicCourses">
      <div className="advancedCourses">
        {Object.entries(SUBJECT_AREAS).map(([subject, coursesObject]) => {
          const courses = (coursesObject.BasicCourses || coursesObject).flat();
          return (
            <Category label={subject} key={subject}>
              {courses.flat().map((course) => (
                <CourseItem name={course} type="basic-course" key={course} />
              ))}
            </Category>
          );
        })}
      </div>
    </div>
  );
}

export default BasicCourses;

import { categories, courseOptions } from "./courses";

const courseContainerDIV = document.querySelector(".course-container");
let selectedCourses = [];

// create cours dom elements
Object.values(categories).flat().forEach(createCourseElement);

function createCourseElement(course) {
  const element = document.createElement("div");
  element.className = "course";
  element.id = course;
  element.innerHTML = `<span class="course-name">${course}</span>`;
  courseContainerDIV.appendChild(element);
  element.addEventListener("click", eventHandler);
}

function eventHandler(event) {
  const element =
    event.target.id !== "" ? event.target : event.target.parentNode;
  const course = element.id;

  // cancel if disabled
  if (element.classList.contains("disabled")) return;

  // toggle selection
  if (!element.classList.contains("selected")) {
    element.classList.add("selected");
    selectedCourses.push(course);
  } else {
    element.classList.remove("selected");
    selectedCourses.splice(selectedCourses.indexOf(course), 1);
  }

  // get further possibilities
  const possibilities = findCoursePossibilties(selectedCourses);
  console.log(possibilities);
}

function findCoursePossibilties(selectedCourses) {
  // search for possibilities
  const possibilities = courseOptions.filter(
    ([coursesA, coursesB, coursesC]) => {
      let foundMatches = [];

      return selectedCourses.every((course) => {
          if()
      });
    }
  );

  return possibilities;
}

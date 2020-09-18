(function () {
  "use strict";

  const categories = {
    Deutsch: ["Deutsch"],
    Fremdsprache: ["Französisch", "Englisch", "Spanisch", "Latein"],
    "Gesellschaftswissenschaftliches Fach": [
      "Geschichte",
      "Sozialkunde",
      "Erdkunde",
    ],
    Mathematik: ["Mathematik"],
    Naturwissenschaft: ["Biologie", "Physik", "Chemie"],
    Informatik: ["Informatik"],
    Religionslehre: ["Evangelische Religion", "Katholische Religion"],
    Sport: ["Sport"],
    "Künstlerisches Fach": ["Musik", "Kunst"],
  };

  const courseCombinations = [
    [categories.Fremdsprache, categories.Mathematik, categories.Deutsch],
    [categories.Fremdsprache, categories.Naturwissenschaft, categories.Deutsch],
    [
      categories.Fremdsprache,
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    [categories.Fremdsprache, categories.Fremdsprache, categories.Mathematik],
    [
      categories.Fremdsprache,
      categories.Fremdsprache,
      categories.Naturwissenschaft,
    ],
    [
      categories.Fremdsprache,
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    [
      categories.Fremdsprache,
      categories.Mathematik,
      categories.Naturwissenschaft,
    ],
    [categories.Fremdsprache, categories.Mathematik, categories.Informatik],
    [
      categories.Fremdsprache,
      categories.Mathematik,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories.Naturwissenschaft,
    ],
    [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories.Informatik,
    ],
    [categories.Mathematik, categories.Naturwissenschaft, categories.Deutsch],
    [
      categories.Mathematik,
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    [
      categories.Mathematik,
      categories.Naturwissenschaft,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    [
      categories.Naturwissenschaft,
      categories.Naturwissenschaft,
      categories.Deutsch,
    ],
    [categories.Mathematik, categories.Deutsch, categories.Informatik],
    [
      categories.Naturwissenschaft,
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    [categories.Fremdsprache, categories.Mathematik, categories.Sport],
    [categories.Fremdsprache, categories.Mathematik, categories.Religionslehre],
    [
      categories.Fremdsprache,
      categories.Mathematik,
      categories["Künstlerisches Fach"],
    ],
    [categories.Naturwissenschaft, categories.Deutsch, categories.Informatik],
    [categories.Fremdsprache, categories.Naturwissenschaft, categories.Sport],
    [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories.Religionslehre,
    ],
    [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories["Künstlerisches Fach"],
    ],
    [categories.Mathematik, categories.Deutsch, categories.Sport],
    [categories.Mathematik, categories.Deutsch, categories.Religionslehre],
    [
      categories.Mathematik,
      categories.Deutsch,
      categories["Künstlerisches Fach"],
    ],
    [categories.Naturwissenschaft, categories.Deutsch, categories.Sport],
    [
      categories.Naturwissenschaft,
      categories.Deutsch,
      categories.Religionslehre,
    ],
    [
      categories.Naturwissenschaft,
      categories.Deutsch,
      categories["Künstlerisches Fach"],
    ],
  ];

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
    // disabled other items
    courseContainerDIV.querySelectorAll(".course").forEach((el) => {
      if (!possibilities.includes(el.id) && !el.classList.contains("selected"))
        el.classList.add("disabled");
      else el.classList.remove("disabled");
    });
  }

  function findCoursePossibilties(selectedCourses) {
    // convert given courses to categories
    const selectedCategories = selectedCourses.map((course) =>
      getCategory(course)
    );
    // search for possibilities
    const possibleCategoryCombinatinons = courseCombinations.map(
      (courseCombination) => {
        // get categories of maped combi
        const combinationCategory = courseCombination.map((combi) =>
          getCategory(combi[0])
        );
        // check if combi matches
        const matched = selectedCategories.every((category) => {
          if (combinationCategory.includes(category)) {
            combinationCategory.splice(
              combinationCategory.indexOf(category),
              1
            );
            return true;
          }
        });
        if (matched)
          return combinationCategory
            .map((category) => categories[category])
            .flat();
      }
    );
    return [...new Set(possibleCategoryCombinatinons.flat().filter((n) => n))];
  }

  function getCategory(course) {
    return Object.entries(categories).filter(([category, courses]) =>
      courses.includes(course)
    )[0][0];
  }
})();

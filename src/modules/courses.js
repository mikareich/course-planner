/**
 * All courses
 */
const allCourses = [
  "Deutsch",
  "Französisch",
  "Englisch",
  "Spanisch",
  "Latein",
  "Geschichte",
  "Sozialkunde",
  "Erdkunde",
  "Sozialkunde/ Erdkunde",
  "Mathematik",
  "Biologie",
  "Physik",
  "Chemie",
  "Informatik",
  "Evangelische Religion",
  "Katholische Religion",
  "Ethik",
  "Philosophie",
  "Sport",
  "Musik",
  "Bildende Kunst",
];

/**
 * Courses, sorted by there category
 */
const categories = {
  Deutsch: ["Deutsch"],
  Fremdsprache: ["Französisch", "Englisch", "Spanisch", "Latein"],
  "Gesellschaftswissenschaftliches Fach": {
    Grundkurs: ["Geschichte", "Sozialkunde/ Erdkunde"],
    Leistungskurs: ["Geschichte", "Sozialkunde", "Erdkunde"],
  },
  Mathematik: ["Mathematik"],
  Naturwissenschaft: ["Biologie", "Physik", "Chemie"],
  Informatik: ["Informatik"],
  Religionslehre: {
    Grundkurs: ["Evangelische Religion", "Katholische Religion", "Ethik"],
    Leistungskurs: ["Evangelische Religion", "Katholische Religion"],
  },
  Sport: ["Sport"],
  "Künstlerisches Fach": {
    Grundkurs: ["Bildende Kunst", "Musik", "Darstellendes Spiel"],
    Leistungskurs: ["Bildende Kunst", "Musik"],
  },
};
/**
 * The different subject areas of the courses
 */
const subjectAreas = {
  Sprachen: [categories.Deutsch, categories.Fremdsprache],
  Gesellschaftswissenschaften: {
    Grundkurs: categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
    Leistungskurs:
      categories["Gesellschaftswissenschaftliches Fach"].Leistungskurs,
  },
  MINT: [
    categories.Mathematik,
    categories.Naturwissenschaft,
    categories.Informatik,
  ],
  Religionen: {
    Grundkurs: categories.Religionslehre.Grundkurs,
    Leistungskurs: categories.Religionslehre.Leistungskurs,
  },
  "Andere...": {
    Grundkurs: [categories.Sport, categories["Künstlerisches Fach"].Grundkurs],
    Leistungskurs: [
      categories.Sport,
      categories["Künstlerisches Fach"].Leistungskurs,
    ],
  },
};
/**
 * All course-combinations
 */
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
  [categories.Naturwissenschaft, categories.Deutsch, categories.Religionslehre],
  [
    categories.Naturwissenschaft,
    categories.Deutsch,
    categories["Künstlerisches Fach"],
  ],
];

export { courseCombinations, subjectAreas, allCourses };

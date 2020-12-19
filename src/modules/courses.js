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
  Philosophie: ["Philosophie"],
  get "Verpflichtende Kurse 1"() {
    return [this.Fremdsprache, this.Naturwissenschaft, this.Informatik];
  },
  get "Verpflichtende Kurse 2"() {
    return [
      this.Fremdsprache,
      this.Naturwissenschaft,
      this.Informatik,
      this["Künstlerisches Fach"],
      this.Philosophie,
    ];
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
  {
    id: 0,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Mathematik,
      categories.Deutsch,
    ],
    grundkurse: [
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      [categories["Verpflichtende Kurse 1"]],
    ],
  },
];

export { courseCombinations, subjectAreas, allCourses };

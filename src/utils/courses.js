/**
 * All courses
 */
export const ALL_COURSES = [
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
 * ALl basic courses
 */

export const BASIC_COURSES = [
  "Deutsch",
  "Französisch",
  "Englisch",
  "Spanisch",
  "Latein",
  "Geschichte",
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
 * All advanced courses
 */
export const ADVANCED_COURSES = [
  "Deutsch",
  "Französisch",
  "Englisch",
  "Spanisch",
  "Latein",
  "Geschichte",
  "Sozialkunde",
  "Erdkunde",
  "Mathematik",
  "Biologie",
  "Physik",
  "Chemie",
  "Informatik",
  "Evangelische Religion",
  "Katholische Religion",
  "Philosophie",
  "Sport",
  "Musik",
  "Bildende Kunst",
  "Darstellendes Spiel",
];

/**
 * Courses, sorted by there category
 */
export const CATEGORIES = {
  Deutsch: ["Deutsch"],
  Fremdsprache: ["Französisch", "Englisch", "Spanisch", "Latein"],
  "Gesellschaftswissenschaftliches Fach": {
    BasicCourses: ["Geschichte", "Sozialkunde/ Erdkunde"],
    AdvancedCourses: ["Geschichte", "Sozialkunde", "Erdkunde"],
  },
  Mathematik: ["Mathematik"],
  Naturwissenschaft: ["Biologie", "Physik", "Chemie"],
  Informatik: ["Informatik"],
  Religionslehre: {
    BasicCourses: ["Evangelische Religion", "Katholische Religion", "Ethik"],
    AdvancedCourses: ["Evangelische Religion", "Katholische Religion"],
  },
  Sport: ["Sport"],
  "Künstlerisches Fach": {
    BasicCourses: ["Bildende Kunst", "Musik", "Darstellendes Spiel"],
    AdvancedCourses: ["Bildende Kunst", "Musik"],
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
      this["Künstlerisches Fach"].BasicCourses,
      this.Philosophie,
    ];
  },
};
/**
 * The different subject areas of the courses
 */
export const SUBJECT_AREAS = {
  Sprachen: [CATEGORIES.Deutsch, CATEGORIES.Fremdsprache],
  Gesellschaftswissenschaften: {
    BasicCourses:
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
    AdvancedCourses:
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
  },
  MINT: [
    CATEGORIES.Mathematik,
    CATEGORIES.Naturwissenschaft,
    CATEGORIES.Informatik,
  ],
  Religionen: {
    BasicCourses: CATEGORIES.Religionslehre.BasicCourses,
    AdvancedCourses: CATEGORIES.Religionslehre.AdvancedCourses,
  },
  "Andere...": {
    BasicCourses: [
      CATEGORIES.Sport,
      CATEGORIES["Künstlerisches Fach"].BasicCourses,
    ],
    AdvancedCourses: [
      CATEGORIES.Sport,
      CATEGORIES["Künstlerisches Fach"].AdvancedCourses,
    ],
  },
};

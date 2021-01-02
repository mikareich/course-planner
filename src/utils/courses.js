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
  "Darstellendes Spiel",
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
  "Sport",
  "Musik",
  "Bildende Kunst",
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

export const MANDATORY_COURSE_CATEGORIES = [
  CATEGORIES.Deutsch,
  CATEGORIES.Fremdsprache,
  CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
  CATEGORIES.Mathematik,
  CATEGORIES.Naturwissenschaft,
  CATEGORIES.Religionslehre.BasicCourses,
  CATEGORIES.Sport,
  CATEGORIES["Verpflichtende Kurse 1"],
  CATEGORIES["Verpflichtende Kurse 2"],
];

/**
 * Categories with only one course
 */
export const SINGLE_COURSE_CATEGORIES = [
  CATEGORIES.Deutsch,
  CATEGORIES.Mathematik,
  CATEGORIES.Informatik,
  CATEGORIES.Sport,
  CATEGORIES.Philosophie,
];

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
      CATEGORIES.Philosophie,
    ],
    AdvancedCourses: [
      CATEGORIES.Sport,
      CATEGORIES["Künstlerisches Fach"].AdvancedCourses,
    ],
  },
};

export const NUMBER_OF_HOURS_ADVANCED_COURSES = [
  // Sprachen - 7 hours
  [[...CATEGORIES.Deutsch, ...CATEGORIES.Fremdsprache], 7],
  // Gesellschaftswissenschaftliches Fach - 4 hours
  [CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses, 4],
  // default - 5 hours
  [
    [
      ...CATEGORIES.Mathematik,
      ...CATEGORIES.Naturwissenschaft,
      ...CATEGORIES.Religionslehre.AdvancedCourses,
      ...CATEGORIES.Sport,
      ...CATEGORIES.Informatik,
    ],
    5,
  ],
];

export const NUMBER_OF_HOURS_BASIC_COURSES = [
  [
    [
      ...CATEGORIES.Deutsch,
      ...CATEGORIES.Fremdsprache,
      ...CATEGORIES.Mathematik,
      ...CATEGORIES.Naturwissenschaft,
      ...CATEGORIES.Informatik,
      ...CATEGORIES["Künstlerisches Fach"].BasicCourses,
      ...CATEGORIES.Philosophie,
    ],
    3,
  ],
  [
    [
      ...CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      ...CATEGORIES.Religionslehre.BasicCourses,
      ...CATEGORIES.Sport,
    ],
    2,
  ],
];

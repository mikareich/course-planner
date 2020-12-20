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
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 1,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories.Deutsch,
    ],
    grundkurse: [
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 2,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Leistungskurs,
    ],
    grundkurse: [
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 3,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Fremdsprache,
      categories.Mathematik,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 4,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Fremdsprache,
      categories.Naturwissenschaft,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 5,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 6,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Mathematik,
      categories.Naturwissenschaft,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 7,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Mathematik,
      categories.Informatik,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 8,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Mathematik,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 9,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories.Naturwissenschaft,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 10,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 11,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories.Informatik,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 12,
    leistungskurse: [
      categories.Mathematik,
      categories.Naturwissenschaft,
      categories.Deutsch,
    ],
    grundkurse: [
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 13,
    leistungskurse: [
      categories.Mathematik,
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    grundkurse: [
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 14,
    leistungskurse: [
      categories.Mathematik,
      categories.Naturwissenschaft,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    grundkurse: [
      categories.Deutsch,
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 15,
    leistungskurse: [
      categories.Naturwissenschaft,
      categories.Naturwissenschaft,
      categories.Deutsch,
    ],
    grundkurse: [
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 16,
    leistungskurse: [
      categories.Mathematik,
      categories.Deutsch,
      categories.Informatik,
    ],
    grundkurse: [
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 17,
    leistungskurse: [
      categories.Naturwissenschaft,
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"],
    ],
    grundkurse: [
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre.Grundkurs,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 18,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Mathematik,
      categories.Sport,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Religionslehre.Grundkurs,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 19,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Mathematik,
      categories.Religionslehre,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 20,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Mathematik,
      categories["Künstlerisches Fach"],
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Naturwissenschaft,
      categories.Religionslehre,
      categories.Sport,
      categories["Verpflichtende Kurse 1"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 21,
    leistungskurse: [
      categories.Naturwissenschaft,
      categories.Deutsch,
      categories.Informatik,
    ],
    grundkurse: [
      categories.Fremdsprache,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre,
      categories.Sport,
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
  {
    id: 22,
    leistungskurse: [
      categories.Fremdsprache,
      categories.Naturwissenschaft,
      categories.Sport,
    ],
    grundkurse: [
      categories.Deutsch,
      categories["Gesellschaftswissenschaftliches Fach"].Grundkurs,
      categories.Mathematik,
      categories.Religionslehre,
      categories["Verpflichtende Kurse 1"],
      categories["Verpflichtende Kurse 2"],
    ],
    pflichtstunden: 32,
  },
];

export { courseCombinations, subjectAreas, allCourses };

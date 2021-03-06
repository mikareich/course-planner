import { CATEGORIES } from "./courses";

/**
 * All course combinations
 */
const COURSE_COMBINATIONS = [
  {
    id: 0,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
      CATEGORIES.Deutsch,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 1,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Deutsch,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 2,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 3,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 4,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Fremdsprache,
      CATEGORIES.Naturwissenschaft,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 5,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 6,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
      CATEGORIES.Naturwissenschaft,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 7,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
      CATEGORIES.Informatik,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 8,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 9,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Naturwissenschaft,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 10,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 11,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Informatik,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 12,
    advancedCourses: [
      CATEGORIES.Mathematik,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Deutsch,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 13,
    advancedCourses: [
      CATEGORIES.Mathematik,
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 14,
    advancedCourses: [
      CATEGORIES.Mathematik,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 15,
    advancedCourses: [
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Deutsch,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 16,
    advancedCourses: [
      CATEGORIES.Mathematik,
      CATEGORIES.Deutsch,
      CATEGORIES.Informatik,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 17,
    advancedCourses: [
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 18,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
      CATEGORIES.Sport,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 35,
  },
  {
    id: 19,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 33,
  },
  {
    id: 20,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Mathematik,
      CATEGORIES["Künstlerisches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 21,
    advancedCourses: [
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Deutsch,
      CATEGORIES.Informatik,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 22,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Sport,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 35,
  },
  {
    id: 23,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 2"],
    ],
    mandatoryWeeklyHours: 33,
  },
  {
    id: 24,
    advancedCourses: [
      CATEGORIES.Fremdsprache,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES["Künstlerisches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Deutsch,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 25,
    advancedCourses: [
      CATEGORIES.Mathematik,
      CATEGORIES.Deutsch,
      CATEGORIES.Sport,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 1"],
    ],
    mandatoryWeeklyHours: 35,
  },
  {
    id: 26,
    advancedCourses: [
      CATEGORIES.Mathematik,
      CATEGORIES.Deutsch,
      CATEGORIES.Religionslehre.AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 1"],
    ],
    mandatoryWeeklyHours: 33,
  },
  {
    id: 27,
    advancedCourses: [
      CATEGORIES.Mathematik,
      CATEGORIES.Deutsch,
      CATEGORIES["Künstlerisches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
    ],
    mandatoryWeeklyHours: 32,
  },
  {
    id: 28,
    advancedCourses: [
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Deutsch,
      CATEGORIES.Sport,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 1"],
    ],
    mandatoryWeeklyHours: 35,
  },
  {
    id: 29,
    advancedCourses: [
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Deutsch,
      CATEGORIES.Religionslehre.AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
      CATEGORIES["Verpflichtende Kurse 1"],
    ],
    mandatoryWeeklyHours: 33,
  },
  {
    id: 30,
    advancedCourses: [
      CATEGORIES.Naturwissenschaft,
      CATEGORIES.Deutsch,
      CATEGORIES["Künstlerisches Fach"].AdvancedCourses,
    ],
    mandatoryBasicCourseCategories: [
      CATEGORIES.Fremdsprache,
      CATEGORIES["Gesellschaftswissenschaftliches Fach"].BasicCourses,
      CATEGORIES.Mathematik,
      CATEGORIES.Religionslehre.BasicCourses,
      CATEGORIES.Sport,
      CATEGORIES["Verpflichtende Kurse 1"],
    ],
    mandatoryWeeklyHours: 32,
  },
];

export default COURSE_COMBINATIONS;

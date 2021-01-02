import COURSE_COMBINATIONS from "../utils/courseCombinations";
import { getCourseCombination } from "../utils/getCourseCombination";

test("Test `getCourseCombination` with 'Deutsch' and 'Englisch' as selected advanced courses", () => {
  expect(getCourseCombination(["Deutsch", "Englisch"])).toEqual([
    COURSE_COMBINATIONS[0],
    COURSE_COMBINATIONS[1],
    COURSE_COMBINATIONS[2],
  ]);
});

test("Test `getCourseCombination` with 'Mathematik' and 'Katholische Religion' as selected advanced courses", () => {
  expect(getCourseCombination(["Mathematik", "Katholische Religion"])).toEqual([
    COURSE_COMBINATIONS[19],
    COURSE_COMBINATIONS[26],
  ]);
});

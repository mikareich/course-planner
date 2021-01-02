import assignBasicCourses from "../utils/assignBasicCourses";

test(`Test 'getDisabledBasicCourses' (Part 1)`, () => {
  expect(
    assignBasicCourses(
      [
        "Sport",
        "Geschichte",
        "Sozialkunde/ Erdkunde",
        "Chemie",
        "Katholische Religion",
        "Darstellendes Spiel",
      ],
      ["Englisch", "Mathematik", "Deutsch"]
    )
  ).toEqual([
    ["Englisch", "Mathematik", "Deutsch", "Evangelische Religion", "Ethik"],
    [
      "Gesellschaftswissenschaftliches Fach",
      "Chemie",
      "Katholische Religion",
      "Sport",
      undefined,
      "Darstellendes Spiel",
    ],
    undefined,
  ]);
});

test(`Test 'getDisabledBasicCourses' (Part 2)`, () => {
  expect(
    assignBasicCourses(
      [
        "Mathematik",
        "Sport",
        "Sozialkunde/ Erdkunde",
        "Katholische Religion",
        "Biologie",
        "Französisch",
        "Spanisch",
        "Musik",
      ],
      ["Deutsch", "Physik", "Geschichte"]
    )
  ).toEqual([
    [
      "Deutsch",
      "Physik",
      "Geschichte",
      "Englisch",
      "Latein",
      "Chemie",
      "Informatik",
      "Evangelische Religion",
      "Ethik",
      "Philosophie",
      "Bildende Kunst",
      "Darstellendes Spiel",
    ],
    [
      "Französisch",
      "Gesellschaftswissenschaftliches Fach",
      "Mathematik",
      "Katholische Religion",
      "Sport",
      "Biologie",
      "Spanisch",
    ],
    "Musik",
  ]);
});

test(`Test 'getDisabledBasicCourses' (Part 3)`, () => {
  expect(
    assignBasicCourses(
      [
        "Deutsch",
        "Mathematik",
        "Sport",
        "Sozialkunde/ Erdkunde",
        "Evangelische Religion",
        "Informatik",
        "Chemie",
      ],
      ["Englisch", "Geschichte", "Biologie"]
    )
  ).toEqual([
    [
      "Englisch",
      "Geschichte",
      "Biologie",
      "Französisch",
      "Spanisch",
      "Latein",
      "Physik",
      "Katholische Religion",
      "Ethik",
      "Philosophie",
    ],
    [
      "Deutsch",
      "Gesellschaftswissenschaftliches Fach",
      "Mathematik",
      "Evangelische Religion",
      "Sport",
      "Informatik",
      "Chemie",
    ],
    undefined,
  ]);
});

test(`Test 'getDisabledBasicCourses' (Part 4)`, () => {
  expect(
    assignBasicCourses(
      [
        "Sport",
        "Geschichte",
        "Sozialkunde/ Erdkunde",
        "Katholische Religion",
        "Biologie",
        "Französisch",
        "Bildende Kunst",
        "Musik",
      ],
      ["Englisch", "Mathematik", "Deutsch"]
    )
  ).toEqual([
    [
      "Englisch",
      "Mathematik",
      "Deutsch",
      "Spanisch",
      "Latein",
      "Physik",
      "Chemie",
      "Informatik",
      "Evangelische Religion",
      "Ethik",
      "Philosophie",
      "Darstellendes Spiel",
    ],
    [
      "Gesellschaftswissenschaftliches Fach",
      "Biologie",
      "Katholische Religion",
      "Sport",
      "Französisch",
      "Bildende Kunst",
    ],
    "Musik",
  ]);
});

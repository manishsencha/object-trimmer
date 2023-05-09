const objectTrimmer = require('../src');

test('Object Trimmer : ', () => {
  expect(objectTrimmer({ name: "Manish Sencha    " })).toStrictEqual({ name: "Manish Sencha" });
});

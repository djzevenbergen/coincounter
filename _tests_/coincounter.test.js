import { Age } from './../src/planets.js';

describe('ageCalc', function () {
  let thisAge;
  let birthDate;
  beforeEach(function () {
    birthDate = '2010-04-17'
    thisAge = new Age("United States", birthDate);
    thisAge.calculateAge();

  });

  test('verifies that the Age object is created with the correct age property', function () {
    expect(thisAge.age).toEqual(10);

  });
});
import { coinCounter } from './../src/coincounter.js';
import { coinCounter2 } from './../src/coincounter.js';
import { quarter } from './../src/coincounter.js';
import { dime } from './../src/coincounter.js';
import { nickel } from './../src/coincounter.js';
import { penny } from './../src/coincounter.js';

test('verifies that the Age object is created with the correct age property', function () {
  let thisArray = [2, 1, 1, 1];
  expect(coinCounter(.66)).toEqual(thisArray);
});

test('verifies that coinCounter2 returns an array conatining the number of quarters, dimes, nickels, and pennies needed to add up to the amount passed in as money', function () {
  expect(coinCounter2(.66)).toEqual([2, 1, 1, 1]);
});

test('verifies that quarter works as expected', function () {
  expect(quarter(.55)).toEqual(2);
});

test('verifies that dime works as expected', function () {
  expect(dime(.61)).toEqual(6);
});

test('verifies that nickel works as expected', function () {
  expect(nickel(.17)).toEqual(3);
});
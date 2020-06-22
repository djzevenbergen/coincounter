import { coinCounter } from './../src/coincounter.js';
import { coinCounter2 } from './../src/coincounter.js';
import { Counter } from './../src/coincounter.js';

test('verifies that the Age object is created with the correct age property', function () {
  let thisArray = [2, 1, 1, 1];
  expect(coinCounter(.66)).toEqual(thisArray);
});

test('verifies that coinCounter2 returns an array conatining the number of quarters, dimes, nickels, and pennies needed to add up to the amount passed in as money', function () {
  expect(coinCounter2(.66)).toEqual([2, 1, 1, 1]);
});

test('verifies that quarter works as expected', function () {
  expect(Counter.quarter(.55)).toEqual(2);
});
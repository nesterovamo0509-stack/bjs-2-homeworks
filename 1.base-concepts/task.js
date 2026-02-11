"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let disc = Math.pow(b, 2) - 4 * a * c;

  if (disc < 0) return arr;

  if (disc === 0) {
    arr.push(-b / (2 * a));
    return arr;
  }

  if (disc > 0) {
    arr.push((-b + Math.sqrt(disc) )/(2*a));
    arr.push((-b - Math.sqrt(disc) )/(2*a));
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let monthPercent = percent / 100 / 12;
  let creditBody = amount - contribution;
  let payment = creditBody * (monthPercent + (monthPercent / (Math.pow(1 + monthPercent, countMonths) - 1)));
  let creditSum = payment * countMonths;

  return Number.parseFloat(creditSum.toFixed(2));

}

// Задача 1

function getArrayParams(...arr) {
  if (arr.length === 0) {
    return {min: 0, max: 0, avg: 0};
  }

  let min = arr[0];
  let max = arr[0];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
    sum += arr[i];
  }

  const avg = +(sum / arr.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}


// Задача 2

function summElementsWorker(...arr) {

  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;

}

function differenceMaxMinWorker(...arr) {

  if (arr.length === 0) {
    return 0;
  }

  let min = arr[0];
  let max = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
    if (arr[i] < min) {
      min = arr[i];
    }
  }

  return max - min;

}

function differenceEvenOddWorker(...arr) {

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
    } else {
      sumOddElement += arr[i];
    }
  }

  return sumEvenElement - sumOddElement;

}

function averageEvenElementsWorker(...arr) {

  sumEvenElement = 0;
  countEvenElement = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEvenElement += arr[i];
      countEvenElement++;
    }
  }

  if (countEvenElement === 0) {
    return 0;
  }

  return sumEvenElement / countEvenElement;

}

// Задача 3

function makeWork (arrOfArr, func) {

  maxWorkerResult = -Infinity;

  for (const arr of arrOfArr) {
    const value = func(...arr);

    if (value > maxWorkerResult)
      maxWorkerResult = value;
  }
  return maxWorkerResult;
}


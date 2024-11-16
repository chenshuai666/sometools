export function isInteger(num) {
  return Number.isInteger(num);
}

export function floor(num, precision) {
  if (isInteger(precision)) {
    return Math.floor(num * Math.pow(10, precision)) / Math.pow(10, precision);
  } else {
    throw "Input is not a Integer";
  }
}

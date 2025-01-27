const add = function (number1, number2) {
  return number1 + number2
}

const subtract = function (number1, number2) {
  return number1 - number2
}

const sum = function (array) {
  let result = 0
  for (const value of array.values()) result += value
  return result
}

const multiply = function (array) {
  let result = 1
  for (const value of array.values()) result *= value
  return result
}

const power = function (number1, number2) {
  return number1 ** number2
}

const factorial = function (number) {
  if (number === 0 || number === 1) return 1
  else return number * factorial(number - 1)
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
}

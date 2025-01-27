const sumAll = function (number1, number2) {
  let sum = 0
  if (Number.isInteger(number1) && number1 > 0 &&
		Number.isInteger(number2) && number2 > 0) {
    if (number1 < number2) {
      while (number1 <= number2) {
        sum += number1
        number1++
      }
    } else if (number1 > number2) {
      while (number1 >= number2) {
        sum += number1
        number1--
      }
    } else return number1
    return sum
  } else return 'ERROR'
}

// Do not edit below this line
module.exports = sumAll

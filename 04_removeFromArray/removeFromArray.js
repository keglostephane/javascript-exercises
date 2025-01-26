const removeFromArray = function (array, ...args) {
  for (const value of args) {
    while (array.indexOf(value) !== -1) {
      array.splice(array.indexOf(value), 1)
    }
  }
  return array
}

// Do not edit below this line
module.exports = removeFromArray

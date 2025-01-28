const fibonacci = function (rank) {
  const num = parseInt(rank, 10)
  if (num === NaN) return 'OOPS'
  if (num < 0) return 'OOPS'
  if (num === 0) return 0
  if (num === 1) return 1
  if (num === 2) return 1
  return fibonacci(num - 2) + fibonacci(num - 1)
}

// Do not edit below this line
module.exports = fibonacci

const palindromes = function (string) {
  const regexp = /\w/g		// match word characters
  const match = string.match(regexp).join('').toLowerCase()
  const reversed = string.match(regexp).reverse().join('').toLowerCase()
  return match === reversed
}

// Do not edit below this line
module.exports = palindromes

function isAnagram(stringA, stringB) {
  if (typeof stringA !== 'string' || typeof stringB !== 'string') {
    throw new Error(`At least one of the parameters is of an invalid type: Param1: ${stringA}, Param2: ${stringB}. Both params should be strings.`)
  }

  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}

module.exports = isAnagram

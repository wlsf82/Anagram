function isAnagram(arg1, arg2) {
  if (Array.isArray(arg1)) {
    cleanArray = arg1.map(arg => cleanString(arg))
    return cleanArray.every(item => item === cleanArray[0])
  } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return cleanString(arg1) === cleanString(arg2)
  } else {
    throw new Error(`Arg1 should be or an array of strings, or a string. If the later, arg2 should also be provided, and it should also be a string. Arg1: ${arg1}, Arg2: ${arg2}`)
  }
}

function cleanString(str) {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}

module.exports = isAnagram

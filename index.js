function isAnagram(arg1, arg2) {
  if (Array.isArray(arg1)) {
    formalizedArray = arg1.map(arg => formalizeString(arg))
    return formalizedArray.every(item => item === formalizedArray[0])
  } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return formalizeString(arg1) === formalizeString(arg2)
  } else {
    throw new Error(`Arg1 should be or an array of strings, or a string. If the later, arg2 should also be provided, and it should also be a string. Arg1: ${arg1}, Arg2: ${arg2}`)
  }
}

function formalizeString(str) {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}

module.exports = isAnagram

function isAnagram(arg1, arg2) {
  if (Array.isArray(arg1)) {
    return arg1.map(arg => {
      return cleanString(arg)
    }).map((str, index, arr) => {
      while (index < arr.length - 1) {
        if (str === arr[index + 1]) {
          return true
        } else {
          return false
        }
      }
      return true
    }).every(item => item === true)
  } else if (typeof arg1 === 'string' && typeof arg2 === 'string') {
    return cleanString(arg1) === cleanString(arg2)
  } else {
    throw new Error(`Arg1 should be or an array of string, or a string. If the later, arg2 should also be privided, and it should also be a string. Arg1: ${arg1}, Arg2: ${arg2}`)
  }
}

function cleanString(str) {
  return str.replace(/[^\w]/g).toLowerCase().split('').sort().join()
}

module.exports = isAnagram

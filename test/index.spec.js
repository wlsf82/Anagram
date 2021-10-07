const { expect } = require('chai')

describe('isAnagram', () => {
  const isAnagram = require('../')

  it('should return true if the two strings are anagrams', () => {
    expect(isAnagram('angel', 'glean')).to.equal(true)
  })

  it('should return false if the two strings are not anagrams', () => {
    expect(isAnagram('angel', 'gloob')).to.equal(false)
  })

  it('should return true if the two strings are anagram sentences', () => {
    expect(isAnagram('The Morse Code', 'Here come dots')).to.equal(true)
  })

  it('should return true if the two strings are the same', () => {
    expect(isAnagram('angel', 'angel')).to.equal(true)
  })

  it('should return false if the two strings have different length (spaces in between the second param)', () => {
    expect(isAnagram('angel', ' glean ')).to.equal(false)
  })

  it('should return true if the two strings are anagrams (case-insensitive)', () => {
    expect(isAnagram('ANGEL', 'glean')).to.equal(true)
  })

  it('should throw an error if the provided arguments are not strings', () => {
    expect(() => isAnagram(1, false)).to.throw('Arg1 should be or an array of strings, or a string. If the later, arg2 should also be provided, and it should also be a string. Arg1: 1, Arg2: false')
  })

  it('should throw an error if the second argument is not a string', () => {
    expect(() => isAnagram('abc', true)).to.throw('Arg1 should be or an array of strings, or a string. If the later, arg2 should also be provided, and it should also be a string. Arg1: abc, Arg2: true')
  })

  it('should throw an error if no arguments are provided', () => {
    expect(() => isAnagram()).to.throw('Arg1 should be or an array of strings, or a string. If the later, arg2 should also be provided, and it should also be a string. Arg1: undefined, Arg2: undefined')
  })

  it('should return true if the provided argument is an array of three anagram words', () => {
    expect(isAnagram(['ANGEL', 'glean', 'angle'])).to.equal(true)
  })

  it('should return false if the provided argument is an array of three non-anagram words', () => {
    expect(isAnagram(['ANGEL', 'bob', 'threat'])).to.equal(false)
  })
})

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
    expect(() => isAnagram(1, false)).to.throw('At least one of the parameters is of an invalid type: Param1: 1, Param2: false. Both params should be strings.')
  })

  it('should throw an error if the second argument is not a string', () => {
    expect(() => isAnagram('abc', true)).to.throw('At least one of the parameters is of an invalid type: Param1: abc, Param2: true. Both params should be strings.')
  })

  it('should throw an error if no arguments are provided', () => {
    expect(() => isAnagram()).to.throw('At least one of the parameters is of an invalid type: Param1: undefined, Param2: undefined. Both params should be strings.')
  })
})

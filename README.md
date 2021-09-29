# Anagram

Sample project with a [`isAnagram`](./index.js) function, which:

- Accepts two words as inputs
- And returns true if the second word is the anagram of the first, and false otherwise

> **Note:** An anagram is a word, phrase, or sentence formed from another by rearranging its letters (e.g., “Angel” is an anagram of “glean”.)

## Pre-requirements

It is required to have nodejs and npm installed to run this project.

> I used versions `v14.17.3` and `6.14.13` of nodejs and npm, respectively. I suggest you use the same or later versions.

## Installation

Run `npm install` (or `npm i` for the short version) to install the dev dependencies.

## Tests

Run `npm test` (or `npm t` for the short version) to run the unit tests.

> After running the tests, you should see a result like this:

```sh
> mocha



  isAnagram
    ✔ should return true if the two strings are anagrams
    ✔ should return false if the two strings are not anagrams
    ✔ should return true if the two strings are anagram sentences
    ✔ should return true if the two strings are the same
    ✔ should return false if the two strings have different length (spaces in between the second param)
    ✔ should return true if the two strings are anagrams (case-insensitive)
    ✔ should throw an error if the provided arguments are not strings
    ✔ should throw an error if the second argument is not a string
    ✔ should throw an error if no arguments are provided


  9 passing (7ms)
```

___

This project was created with 💜 by [Walmyr](https://walmyr.dev).

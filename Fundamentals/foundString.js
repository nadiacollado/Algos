// Given two string arguments, return the index of the first appearance of the the first string in the second string

// Input
  // indexOf('or', 'hello world'); // should return 7
  // indexOf('hello world', 'or'); // should return -1 

// APPROACH
// a for loop iterating through each character of the second word or phrase of words 
// edge cases: first word is longer than second word

function foundString(needle, haystack) {
  for (let i = 0; i < haystack.length; i++) {
    if (needle === haystack.slice(i, i + needle.length)) {
      return i;
    }
  }
  return -1;
}
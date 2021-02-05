// Write a function which takes in two strings and checks where the chars in the first string form a subsequence of the characters in the secong string, without their order changing.

// Time: O(N + M); Space: O(1)

// Input
  // isSubsequence('hello', 'hello world') --> true
  // isSubsequence('sing', 'sting') --> true
  // isSubsequence('abc', 'abracadabra') --> true
  // isSubsequence('abc', 'acb') --> false

// APPROACH
// multiple pointers! 
// compare each element of the first string to the second string only moving up the first string when the current element is found in the second string

// edge case: what if the given string exists within the target string in order but some of the letters from the given string are interpersed out of of order before the correct order appears?

  function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }
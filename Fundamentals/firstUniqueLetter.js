function firstUniqueLetter(str) {
  if (!str.length) return -1; // edge case
  
  // initiliaze our hash table (object)
  const observedLetters = {};
  
  //iterate
  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if(observedLetters[char]) { // letter has been observed
      observedLetters[char]++;
    } else {
      observedLetters[char] = 1; // letter is first occurrence
    }
  }

  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    if (observedLetters[char] === 1) return i;
  }
  return -1;
}
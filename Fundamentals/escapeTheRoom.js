// Input
  // escapeTheRoom(['NADIA', 'PLEAS', 'PLEASE'], ['AELWXYZ', 'AELPXYZ', 'AELPSXY', 'SAELPRT', 'XAEBKSY'])


const escapeTheRoom = (wordlist, keypads) => {
  let counter;
  const output = [];

  for (let i = 0; i < keypads.length; i++) {
    const keypad = keypads[i];
    const key = keypad[0];
    let count = 0;

    counter = {
      'A':0, 
      'B':0, 
      'C':0, 
      'D':0, 
      'E':0, 
      'F':0, 
      'G':0, 
      'H':0, 
      'I':0, 
      'J':0, 
      'K':0, 
      'L':0, 
      'M':0, 
      'N':0, 
      'O':0, 
      'P':0, 
      'Q':0, 
      'R':0, 
      'S':0, 
      'T':0, 
      'U':0, 
      'V':0, 
      'W':0, 
      'X':0, 
      'Y':0, 
      'Z':0 
    };
    
    for (let j = 0; j < keypad.length; j++) {
      const letter = keypad[j];
      counter[letter] += 1;
    }

    for (let l = 0; l < wordlist.length; l++) {
      const word = wordlist[l];

      for (let k = 0; k < word.length; k++) {
        const letter = word[k]
        if (counter[letter] === 0) {
          break;
        } else if (k === word.length - 1 && counter[letter] !== 0 && word.includes(key)) {
         count += 1;
        }
      }
    }
   output.push(count);
  }
  return output;
}

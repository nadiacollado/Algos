// Input
  // charCount('CHEckckck!!!!CHECK') --> {c: 6, h: 2, e: 2, k: 4}

const charCount = str => {
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (/[a-z0-9]/.test(char)) {
     obj[char] ? obj[char]++ : obj[char] = 1;
    }
  }
  return obj;
}
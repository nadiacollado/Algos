// String manipulation

function wordCloud(str){
  const cloud = new Map()
  const sentence = splitWords(str)

  for (let word of sentence){
    word = word.toLowerCase()
    if (cloud.has(word)) cloud.set(word, cloud.get(word)+1)
    else cloud.set(word, 1)
  }
  return cloud
}

function splitWords(str) {
  const words = [];

  let currentWordStartIndex = 0;
  let currentWordLength = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i];

    if (i === str.length - 1){
      if (isLetter(char)){
        currentWordLength += 1;
      }
      if (currentWordLength > 0) {
        const word = str.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
        words.push(word);
      }
    } else if (char === " " || char === '\u2014'){
      if (currentWordLength > 0){
        const word = str.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
        words.push(word);
        currentWordLength = 0;
      }
    } else if (char === '.'){
      if (i < str.length - 1 && str[i + 1] === "."){
        if (currentWordLength > 0){
          const word = str.slice(currentWordStartIndex, currentWordStartIndex + currentWordLength);
          words.push(word);
          currentWordLength = 0;
        }
      }
    } else if (this.isLetter(char) || char === '\'') {
        if (currentWordLength === 0) {
          currentWordStartIndex = i;
        }
        currentWordLength += 1;
    } else if (char === '-'){
      if (i > 0 && isLetter(str[i - 1]) &&
          isLetter(str[i + 1])) {
          currentWordLength += 1;
        } else {
          if (currentWordLength > 0) {
            const word = str.slice(currentWordStartIndex,
            currentWordStartIndex + currentWordLength);
            words.push(word);
            currentWordLength = 0;
          }
      }
    }
  }
  return words;
}

function isLetter(char){
  return (/[a-zA-Z]/).test(char)
}
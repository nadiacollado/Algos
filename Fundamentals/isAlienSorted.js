const isAlienSorted = function(words, order) {
  for (let i = 0; i < words.length - 1; i++){
      let first = words[i];
      let second = words[i + 1];
      let pointer = 0;
      
      while (first[pointer] === second[pointer] 
            && pointer < first.length
            && pointer < second.length){
          pointer++;
      }
      if (order.indexOf(first[pointer]) > order.indexOf(second[pointer])) {
          return false;
      }
  }
  return true;
};
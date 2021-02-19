// Given a non-empty list of words, return the k most frequent elements.
// Your answer should be sorted by frequency from highest to lowest. If two words have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
// Note that "i" comes before "love" due to a lower alphabetical order.

// APPROACH
// create an obj to keep track of the words
// sort by frequency and alphabet
// second loop to pull k words


const topKFrequent = function(words, k) {
  let counter = {};
  let arr = [];
    
  for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (counter[word]) {
        counter[word]++;
      } else {
        counter[word] = 1;
      }
  }

  for (key in counter) {
    arr.push([key, counter[key]]);
  };
   
  arr.sort(function(a, b) {
    if(a[1] != b[1]){
      return b[1] - a[1];
    }
    return a[0].localeCompare(b[0]);
  });

  let result = [];

  for (let i = 0; i <= k - 1; i++) {
    result.push(arr[i][0]);
  }
  return result;
};


// Cleaner solution using map

var topKFrequent = function(words, k) {
    let map = new Map();
    words.map(x=> map.set(x, map.has(x) ? map.get(x) + 1: 1) );
    let arr = Array.from(map).sort((a, b)=> {
        if(a[1] != b[1]){
            return b[1] - a[1];
        }
        return a[0].localeCompare(b[0]);
    });

    arr.splice(k);
    return arr.map(x=> x[0]);
};
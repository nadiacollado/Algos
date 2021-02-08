// Create a function, which takes an array, that determines the number of unique values in the array. There can be negative numbers in the array, but it will always be sorted.

// Time: O(n), Space: O(n)

// Input
  // countUniqueValues([1, 1, 1, 1, 2]) --> 2
  // countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]) --> 7
  // countUniqueValues([]) --> 0
  
function countUniqueValues(arr) {
  let count = 0;
  let valueCheck = {};
  for (let digit of arr) {
    if (!valueCheck[digit]) {
      valueCheck[digit] = 1;
      count++;
    }
  }
  return count;
}
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// Sample Input:
  // averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) --> true
  // averagePair([-1, 0, 3, 4, 5, 6], 4.1) --> false
  // averagePair([], 4) --> false

  function averagePair(input, target) {
    let left = 0;
    let right = input.length - 1;
    
    while (left < right) {
      let average = input[left] + input[right] / 2;
      if (average === target) {
        return true;
      } else if (average > target) {
        right--;
      } else {
        left++;
      }
    }
    return false;
  }
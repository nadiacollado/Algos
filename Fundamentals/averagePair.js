// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

// Sample Input:
  // averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) --> true
  // averagePair([-1, 0, 3, 4, 5, 6], 4.1) --> false
  // averagePair([], 4) --> false


// APPROACH
// nested for loop -- naive solution
// we want to look at each possible pair of numbers
// pointers --> sort the array in ascending order, then move the pointers accordingly based on whether we need to increase or decrease the average that we're seeing 

// INPUT
// ([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)

// 1+19 = 20 / 2 = 10 is that > or < 8
// 1+12 = 13 / 2 = 6.5 is that > or < 8
// 3+12 = 15 / 2 = 7.5 is that > or < 8
// 5+12 = 17 /2 = 8.5 > 8
// 5+10 = 15 / 2 = 7.5 < 8
// 6+10 = 16 / 2 = 8 = 8 !

// if it is greater than the target number that means we need to decrease our input value, right pointer moves left 

// if it is less than the target number that means we need to increase our input value, left pointer moves right

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
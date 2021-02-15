// Write a function that returns the largest sum of n of integers from a given array, and these n integers have to be consecutive 

// Input  
  // ([1, 2, 3, 4, 5, 6, 7], 3) --> 18
  // ([2, 3, 8, 11, 3, 2, 6, 2], 4) --> 25

// APPROACH
// We want to find the four digits within that array that add up to the largest number
// Naive: A nested for loop because we are comparing the integers to one another more than once 
// Optimized: Pointers
// edge case: if num is larger than the length of the array, return null


function largestSumOfN(arr, num) {
  let tempSum = 0;
  let maxSum = 0;
  // edge case
  if (num > arr.length) {
    return null;
  }

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }

  tempSum = maxSum;

  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
      if (tempSum > maxSum) {
        maxSum = tempSum;
      }
  }
  return maxSum;
}
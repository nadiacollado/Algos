// Find if a pair of integers add up to given target integer

// Input 
  // pairSum([0, 1, 2, 3, 4], 5) --> true

// APPROACH
// because the array is in ascending order, we can potentiially figure out if the sum of integers is greater than or lesser than the sum that is given and either increase or decrease the integers accordingly 
// let firstIdx = arr[0]
// let lastIdx = arr[arr.length - 1]
// if their addition is greater than the sum that is given, then decrease the lastIdx by 1
// if it lesser than the sum that is given, then we increase the firstIdx by 1

function pairSum(arr, sum) {
  let firstIdx = 0;
  let lastIdx = arr.length - 1;

  while (lastIdx > firstIdx) {
    if (arr[firstIdx] + arr[lastIdx] > sum) {
      lastIdx--;
    }
    if (arr[firstIdx] + arr[lastIdx] < sum) {
      firstIdx++;
    }
    if (arr[firstIdx] + arr[lastIdx] === sum) {
      return true;
    }
  }
  return false;
}
// Find two integers within the given array that add up to a target number, which is represented by the second argument in this the twoSum function

// APPROACH
// For loop, because we need to iterate through this array and compare each element to every other element in the array
// Recursively


function twoSum(arr, targetNum) {
  // edge cases
  if (arr.length <= 1) return false;

  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === targetNum) {
        return true;
      }
    }
  }
  return false;
}
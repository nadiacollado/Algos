// Given an array of weights and a max capacity, return the max possible sum of weights that doesn't exceed the capacity.

// APPROACH
// sort the array from biggest to smallest
// move from left to right adding values to the currentSum only if the currentSum is smaller than the max value
// set finalSum = currentSum as long as it's smaller than the max value
// if adding the value to the currentSum makes it greater than the max, move on to the next valuereturn finalSum

// Input
  // maxSum([75, -45, 5, 4, 2, 2, 2], -34) --> -34
  // maxSum([75, 45, 5, 4, 2, 2, 2], 34) --> 15


const maxSum = (weights, max) => {
  let sum = 0;
  for (let i = 0; i < weights.length; i++) {
    let weight = weights[i];
    if (sum + weight > max) {
      continue;
    } else {
      sum += weight;
    }
  }
  return sum
}
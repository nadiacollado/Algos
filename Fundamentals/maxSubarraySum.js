// While the length of the array is greater than the number given, loop through the array to find the largest sum

// Input
  // maxSubarraySum([100, 200, 300, 400], 2) --> 700

// APPROACH
// nested for loops (naive solution)
// sliding window (optimized)

// function maxSubarraySum(arr, num){
//   if (num > arr.length) return null;
//   let maxSum = 0;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let tempSum = 0;
//     for (let j = 0; j < num; j++) {
//       tempSum += arr[i + j];
//     }
//     if (tempSum > maxSum) {
//       maxSum = tempSum;
//     }
//   }
//   return maxSum;
// }

function maxSubarraySum(arr, num){
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < num; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  // 300
  // 200 + 300
  // 500
  // 300 + 400
  // 700
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i]
    if (tempSum > maxSum) {
      maxSum = tempSum
    }
  }
  return maxSum
}

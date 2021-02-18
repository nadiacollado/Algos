// determine if there is a single element in the array that is greater than or equal to the given integer

// this is an incomplete solution that only works if the length of the finalArray is 2

// function minSubArrayLen(arr, num) {
//   let finalArr = [];

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] >= num) return 1;
//   }

//   for (let i = 0; i < arr.length; i++) {
//     let tempSum = 0;
//     tempSum += arr[i] + arr[i + 1]
//     if (tempSum >= num) {
//       finalArr.push(arr[i])
//       finalArr.push(arr[i + 1])
//       break;
//     }
//   }
//   return finalArr.length
// }

function minSubArrayLen(nums, sum) {
  let total = 0;
  //1 
  //5
  // 21
  let start = 0;
  let end = 0;
  let minLen = Infinity;

  while (start < nums.length) {
    // 0 < 9
    // 0 < 9
    // 0 < 9
    // 0 < 9
    // 2 < 9
    if (total < sum && end < nums.length) {
      // 0 < 39 && 0 < 9
      // 1 < 39 && 1 < 9
      // 5 < 39 && 2 < 9
      // 21 < 39 && 3 < 9
      // 43 < 39 !
      // 38 < 39 && 4 < 9
      total += nums[end];
      // total = 1
      // 1 + 4 = 5
      // 5 + 16 =21
      // 21 + 22 = 43
      // 38 += 5 = 43
      end++;
      // end = 3
      // end = 4
      // end = 5
    }
    else if (total >= sum) {
      // 43 >= 39
      minLen = Math.min(minLen, end - start);
      // infinite, 4 - 0 = 4
      // infinity, 4 - 1 = 3
      // infinity, 5 - 2 = 3
      total -= nums[start];
      // 43 - 1
      // 42
      // 42 - nums[1] == 42 - 4
      // 38 
      // 43 - nums[2] == 43 - 16 = 27
      start++;
      // start = 1
      // start = 2
      // start = 3
    }
    else {
      break;
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
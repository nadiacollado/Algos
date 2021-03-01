// Radix Sort 
// Time O(nk) Space 

// Helpers

// Returns the digit in num at the given place value
// Remember we move from right to left in Radix

function getDigit(num, place) {
  let numStr = num.toString().split("").reverse().join("");
  for (let i = 0; i < numStr.length; i++) {
    if (i === place) return numStr[i];
  }
}

// Alternative more mathematical approach to getting digit

function getDigit(num, place) {
  return Math.floor(Math.abs(num) / Math.pow(10, place)) % 10
}

// Alternate for counting Digits: for loop

function digitCount(num) {
  if (num === 0) return 1
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

function mostDigits(nums) {
  let maxDigits = 0;
  for (let num of nums) {
    let len = digitCount(num);
    if (len > maxDigits) maxDigits = len;
  }
  return maxDigits;
}

function radixSort(nums) {
  const maxDigitCount = mostDigits(nums);
  for (let k = 0; k < maxDigitCount; k++) {
    let digitBuckets = Array.from({length: 10}, () => [])
    for (let i = 0; i < nums.length; i++) {
      let digit = getDigit(nums[i], k);
      digitBuckets[digit].push(nums[i]);
    }
    nums = [].concat(...digitBuckets);
  }
  return nums;
}

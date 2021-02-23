//Given a non-negative integer num represented as a string, remove k digits from the number so that the new number is the smallest possible.

// The length of num is less than 10002 and will be ≥ k.
// The given num does not contain any leading zero.

// Input
  // Input: num = "1432219", k = 3 --> Ouput: 1219
  // Explanation: Remove the three digits 4, 3, and 2 to form the new number 1219 which is the smallest.


var removeKdigits = function(num, k) {
  const stack = [];
  let removed = 0;
  for(let n of num) {
      while(stack.length && n < stack[stack.length-1] && removed < k) {
        stack.pop();
        removed += 1;
      }
      stack.push(n);
  }
  
  // remove all remaining large numbers
  while(removed < k) {
      stack.pop();
      removed += 1;
  }
  
  // remove all beginning zeroes
  while(stack.length && stack[0] === '0') {
      stack.shift();
  }
  
  return stack.length ? stack.join('') : '0';
};
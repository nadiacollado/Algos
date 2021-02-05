// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and check whether there are any duplicates among the args passed in. 

// Restrictions: Time - O(n); Space - O(n)

// Inputs: 
  // areThereDups(1, 2, 3) --> false
  // areThereDups(1, 2, 2) --> true
  // areThereDups('a', 'b', 'c', 'a') --> true

function areThereDuplicates() {
  let counter = {};
  
  for (let val in arguments) {
    if (!counter[arguments[val]]) {
      counter[arguments[val]] = 1;
    } else {
      counter[arguments[val]]++;
    }
  }

  for (let key in counter) {
    if (counter[key] > 1) return true;
  }
  return false;
}
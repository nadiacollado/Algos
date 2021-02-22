// Write a recursive function which accepts an array of arrays and returns a new array with all values flattened

// Input
  // flatten([1, 2, 3, [4, 5] ]) --> [1, 2, 3, 4, 5]
  // flatten([1, [2, [3, 4], [[5]]]]) --> [1, 2, 3, 4, 5]
  // flatten([[1],[2],[3]]) --> [1,2,3]
  // flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) --> [1,2,3]

  function flatten(arr) {
    let flattenedArr = [];
  
   for (let i = 0; i < arr.length; i++) {
     if (Array.isArray(arr[i])) {
       // newArr = newArr.concat(flatten(oldArr[i]))
       flattenedArr = [...flattenedArr, ...flatten(arr[i])];
     }
     else {
       flattenedArr.push(arr[i]);
     }
   }
   return flattenedArr;
  }
  
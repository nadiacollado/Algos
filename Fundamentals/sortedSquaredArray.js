function sortedSquaredArray(arr) {
	const squaredArray = new Array(arr.length).fill(0)
  let small = 0;
  let large = arr.length - 1
  
  for (let i = arr.length - 1; i >= 0; i--){
    if (Math.abs(arr[small]) >= Math.abs(arr[large])){
      squaredArray[i] = arr[small] * arr[small]
      small++
    } else {
      squaredArray[i] = arr[large] * arr[large]
      large--
    }
  }
  return squaredArray
}

// Naive
// function sortedSquaredArray(array) {
// 	const squaredArray = []
//   for (let i = 0; i < array.length; i++){
// 		const squaredInt = array[i] * array[i];
// 		squaredArray.push(squaredInt);
// 	}
//   return squaredArray.sort((a, b) => a - b)
// }
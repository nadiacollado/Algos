// pick a pivot
// initialize a variable for the pivot index
// pivotindex++ whenever you find a value smaller than the pivot


function pivot(arr, start=0, end=arr.length-1) {
  let pivot = arr[start];
  let pivotIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      // move arr[i] to the left of pivot
      pivotIdx++
      let temp = arr[pivotIdx];
      arr[pivotIdx] = arr[i];
      arr[i] = temp;
    }
  }
  let temp = arr[start];
  arr[start] = arr[pivotIdx];
  arr[pivotIdx] = temp;
  return pivotIdx;
}


function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIdx = pivot(arr, left, right);
    quickSort(arr, left, pivotIdx - 1);
    quickSort(arr, pivotIdx + 1, right);
  }
  return arr;
}
const binarySearch = (array, target) => {
  // edge case
  if (array.length < 2 && !array.includes(target)) { 
    return false;
  }

  let midpointIndex = Math.floor( array.length / 2);
  let midpoint = array[midpointIndex];
  let leftArr = array.slice(0, midpointIndex);
  let rightArr = array.slice(midpointIndex);

  if (target === midpoint){
    return true;
  } else if (target < midpoint) {
    return binarySearch(leftArr, target);
  } else if (target > midpoint) {
    return binarySearch(rightArr, target);
  }
  return false;
};
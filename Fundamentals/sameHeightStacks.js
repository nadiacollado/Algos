// Start with an array representing the heights of piles of boxes. In a single step, you can remove boxes from one of the tallest stacks, down to the height of the second highest stacks. How many steps does it take to make all stacks the same height?

// APPROACH
// sort the array
// reverse the array so we can start moving boxes from the the first integer in the array as it'll be the one with the tallest height
// as such we are moving left to right in the loop
// initialize a count that will increment everytime you move right because we need to keep track of the number of moves this is going to take
// initialize a sum variable that will add up the number of moves when we hit a lower stack

const stacks = (boxes) => {

  let count = 0;
  let sum = 0;

  boxes.sort((a, b) => b - a)

  for (let i = 0; i < boxes.length; i++) {
    count++;

    if (boxes[i] > boxes[i + 1]) {
      sum += count;
    }
  }
  return sum;
}
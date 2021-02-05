// Write a function called sameFrequence. Given two positive integers, find out if the two numbers have the same frequence of digits. Solution must have the following Big O: Time O(N)

// Input
  // sameFrequency(182, 281) --> true
  // sameFrequency(22, 222) --> false
  // sameFrequency(3589578, 5879385) --> true


  function sameFrequency(numOne, numTwo){
    let numStr = numOne.toString();
    let numTwoStr = numTwo.toString();

    if (numStr.length !== numTwoStr.length) {
      return false;
    }

    let counter = {};

    for (let i = 0; i < numStr.length; i++){
      let num = numStr[i];
      if (!counter[num]) {
        counter[num] = 1;
      } else {
        counter[num]++;
      }
    }

    for (let i = 0; i < numTwoStr.length; i++){
      let numTwo = numTwoStr[i];

      if (!counter[numTwo]) {
        return false;
      } else {
        counter[numTwo] -= 1;
      }
    }
    return true;
}
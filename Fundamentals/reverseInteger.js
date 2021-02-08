// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Input: x = 123
// Output: 321

// Input: x = -123
// Output: -321

// Input: x = 120
// Output: 21

// Input: x = 0
// Output: 0


const reverse = function(x) {
  const maxInteger = 2147483647;
  const minInteger = -2147483647;
  const strNum = x.toString();
  let reversed = "";

  for (let i = strNum.length - 1; i >= 0; i--) {
      reversed += strNum[i];
  }

  const result = x < 0 ? parseInt(reversed) * -1 : parseInt(reversed);
  return result > maxInteger || result < minInteger ? 0 : result;
}

const addStrings = function(num1, num2) {
  if (num1.length < num2.length) {
    let tmp = num2;
    num2 = num1;
    num1 = tmp;
  }
    
  let carry = 0;
  let num1len = num1.length - 1;
  let num2len = num2.length - 1;
  let sum;
  let totalSum = [];

  for (let i = num1len, j = num2len; i >= 0; i--, j--){
    if (j < 0) sum = Number(num1[i]) + carry;
    else sum = Number(num1[i]) + Number(num2[j]) + carry;

    if (sum > 9) {
      totalSum.unshift((sum - 10).toString());
      carry = 1;
    } else {
      carry = 0;
      totalSum.unshift(sum);
    }
  }
  if (carry !== 0) totalSum.unshift(carry);
  return totalSum.join("");
};
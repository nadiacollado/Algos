// Input
  // palindrome('helloolleh') --> true
  // palindrome('hello') --> false


function palindrome(str) {
  let newStr = '';
  let lowerCaseStr = str.toLowerCase();
  
  for (let i = lowerStr.length - 1; i >= 0; i--) {
      let char = lowerCaseStr[i];
      newStr += char;
  }
  if (newStr === lowerCaseStr) {
      return true;
  } else {
      return false;
  }  
}
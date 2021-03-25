/*
You are given a list of n products, each with a name, price, and weight.
Find out how many duplicates of a product are present within the list. 
A duplicate is a product with all parameters, equal to some other product.

Input Format

The input is 3 lists. Each list is an array ofn products.

Name Height Weight
 1. ball 2     1
 2. box  2     2
 3. ball 2     1
 4. ball 2     1
 5. box  2     3

Print the sum of duplicates. It should be an integer.
*/

function findProductDuplicates(name, price, weight) {
  let map = {};
  let count = 0;

  for(let i = 0; i < name.length; i++){
    let product = name[i] + price[i] + weight[i] 
    if (!map[product]) map[product] = 1;
    else map[product]++;
  }

  for(let product in map){
      if(map[product] > 1){
          count += map[product] - 1;
      }
  }
  return count;
}
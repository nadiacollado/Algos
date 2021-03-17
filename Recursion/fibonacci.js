function fib(n){
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}

// see dynamic programming problem for optimal solution
// Big O: O(2^n)
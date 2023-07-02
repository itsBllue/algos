/*
    Fib(n) returns the fibonacci sequence to the (n) point.
*/

function fib(n) {
  const fibn = [0, 1]
  for (let i = 2; i < n; i++) {
    fibn[i] = fibn[i - 1] + fibn[i - 2]
  }
  return fibn
}

console.log(fib(3)) 
console.log(fib(7))

// Big-O = O(n) as there is 1 loop

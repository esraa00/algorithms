//factorial(n) = 1 * 2 * 3 * ... * (n-1) * n
//factorial(n) = factorial(n-1) * n
//
//             |-> factorial(n-1) * n   n>0
//factorial(n)=|
//             |-> 1                    n=0
//
const factorial = (number) => {
  if (number === 0) return 1;
  return factorial(number - 1) * number;
};

console.log(factorial(4));

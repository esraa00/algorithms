// 1+2+3+4+5+6+..+n
// sum(n)=1+2+3+4+...+(n-1)+n
// sum(n) = sum(n-1)+n
//
//       |---> 0              if(n=0)
//sum(n)=|
//       |---> sum(n-1) + n   if(n>0)

//using recursion O(n)
const sumOfNNaturalNumbers = (number) => {
  if (number === 0) return 0;
  return sumOfNNaturalNumbers(number - 1) + number;
};

console.log(sumOfNNaturalNumbers(10000));

//using direct formula O(1)
const sumOfNaturalNumbers = (number) => {
  return (number * number + 1) / 2;
};

console.log(sumOfNaturalNumbers(1000000000000000));

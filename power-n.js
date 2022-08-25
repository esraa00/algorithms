//powerN(m,n) = m * m * m * m * m to n times
//powerN(m,n) = powerN(m,n-1) * m
//
//             |-> powerN(m,n) * n   n>0
//powerN(m,n)=|
//             |-> 1                 n=0
//
function powerN(number, power) {
  if (power === 0) return 1;
  return powerN(number, power - 1) * number;
}
console.log(powerN(2, 2));

// WPU Coding Challenge 2024
// 002/366
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = (n) => {
//   const result = [];
//   for (let i = n; i >= 1; i--) {
//     result.push(i);
//   }
//   return result;
// };

// reverseSeq = (n) => {
//   return Array(n)
//     .fill()
//     .map((l, m) => m + 1)
//     .reverse();
// };

// reverseSeq = (n) => {
//   return [...Array(n)].map((l, m) => m + 1).reverse();
// };

const reverseSeq = (n) => [...Array(n)].map((_l, m) => m + 1).reverse();

// const reverseSeq = (n) => [...Array(n)].map((_, m) => n - m);

console.log(reverseSeq(5));

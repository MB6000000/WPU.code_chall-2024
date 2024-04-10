// WPU Coding Challenge 2024
// 007/366
// https://www.codewars.com/kata/5513795bd3fafb56c200049e

// function countBy(x, y) {
//   let z = [];
//   for (let i = 1; i <= n; i++) {
//     z.push(i * x);
//   }
//   return z;
// }

function countBy(x, y) {
  return [...Array(y)].map((el, i) => (i + 1) * x);
}

// const countBy = (x, y) => [...Array(y)].map((_, i) => (i + 1) * x);
console.log(countBy(3, 3));

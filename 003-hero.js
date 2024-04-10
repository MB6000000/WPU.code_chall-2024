// WPU Coding Challenge 2024
// 003/366
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(arrows, dragons) {
//   if (arrows / 2 >= dragons) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function hero(arrows, dragons) {
//   return arrows / 2 >= dragons;
// }

const hero = (arrows, dragons) => arrows / 2 >= dragons;

// const hero = (arrows, dragons) => arrows >= dragons * 2;

console.log(hero(10, 5));

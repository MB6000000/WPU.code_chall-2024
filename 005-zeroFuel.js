// WPU Coding Challenge 2024
// 005/366
// https://www.codewars.com/kata/5861d28f124b35723e00005e

// const zeroFuel = (distanceToPump, kmpl, fuelLeft) => {
//   return distanceToPump / kmpl <= fuelLeft;
// };

// const zeroFuel = (distanceToPump, kmpl, fuelLeft) => {
//   return fuelLeft * kmpl >= distanceToPump;
// };

const zeroFuel = (distanceToPump, mpg, fuelLeft) =>
  fuelLeft * mpg >= distanceToPump;

console.log(zeroFuel(100, 50, 1));

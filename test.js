const pipe = require("./index.js");

function double(value) {
  return value * 2;
}

function subtract(value) {
  return value - 1;
}

function asyncDouble(value) {
  return new Promise(resolve => resolve(double(value)));
}

function asyncSubtract(value) {
  return new Promise(resolve => resolve(subtract(value)));
}

async function main() {
  console.log(subtract(double(double(2))));
  console.log(pipe(2).to(double, double, subtract));

  console.log(await asyncSubtract(await asyncDouble(await asyncDouble(4))));
  console.log(await pipe(4).toAsync(double, double, subtract));
}

main();

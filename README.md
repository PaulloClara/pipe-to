# Pipe To

Functional pipe for JavaScript.

### Installation

```bash
$ npm install pipe-to
# Or
$ yarn add pipe-to
```

### Usage

```js
// sync
const pipe = require("pipe-to");

function double(value) {
  return value * 2;
}

function subtract(value) {
  return value - 1;
}

// standard
console.log(subtract(double(double(2))));

// pipe-to
console.log(pipe(2).to(double, double, subtract));
```

```js
// async
...

function asyncDouble(value) {
  return new Promise(resolve => resolve(double(value)));
}

function asyncSubtract(value) {
  return new Promise(resolve => resolve(subtract(value)));
}

(async () => {
  // standard
  console.log(await asyncSubtract(await asyncDouble(await asyncDouble(4))));

  // pipe-to
  console.log(await pipe(4).asyncTo(double, double, subtract));
})();
```

"use strict";

module.exports = args => ({
  to(...steps) {
    return steps.reduce((result, nextStep) => nextStep(result), args);
  },
  asyncTo(...steps) {
    return steps.reduce(
      (result, nextStep) => result.then(nextStep),
      global.Promise.resolve(args)
    );
  }
});

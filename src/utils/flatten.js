const lazyFlatten = function* (values) {
  for (let value of values) {
    if (Array.isArray(value)) {
      yield* lazyFlatten(value);
    } else {
      yield value;
    }
  }
};

const flatten = (values) => [...lazyFlatten(values)];

module.exports = flatten;

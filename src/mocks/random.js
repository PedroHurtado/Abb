const crypto = require('crypto');
const MEASURE_RANGE = {
  MIN: 1,
  MAX: 10,
};
const NUMBER_OF_BYTES = {
  MIN: 1,
  MAX: 2,
};

const numberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const measure = () => numberBetween(MEASURE_RANGE.MIN, MEASURE_RANGE.MAX);

const name = () => {
  const length = numberBetween(NUMBER_OF_BYTES.MIN, NUMBER_OF_BYTES.MAX);
  return crypto.randomBytes(length).toString('hex');
};

module.exports = {
  numberBetween,
  measure,
  name,
};

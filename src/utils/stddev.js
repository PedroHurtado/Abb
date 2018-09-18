const add = (a, b) => a + b;

const sum = (values) => values.reduce(add, 0);

const average = (values) => sum(values) / values.length;

const squareDifference = (avg) => (value) => Math.pow(value - avg, 2);

const standardDeviation = (values) => {
  const avg = average(values);
  const squareDiffs = values.map(squareDifference(avg));
  const avgSquareDiff = average(squareDiffs);
  const stdDev = Math.sqrt(avgSquareDiff);
  return stdDev;
};

module.exports = standardDeviation;

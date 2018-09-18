const {Part} = require('../models');
const createFeatures = require('./featuresfactory');
const cache = require('../cache');
const PART_NAME = 'A';

const create = () => {
  const part = new Part(PART_NAME, createFeatures());
  cache.add(part);
  return part;
};

module.exports = create;

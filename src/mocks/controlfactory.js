const {Control} = require('../models');
const random = require('./random');

const create = (name, expected) => {
  return new Control(name, expected, random.measure());
};

module.exports = create;

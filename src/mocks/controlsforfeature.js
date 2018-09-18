const {features} = require('../models');
const random = require('./random');
const NUMBER_OF_CONTROLS = {
  MIN: 4,
  MAX: 12,
};

const getControlParams = () => [random.name(), random.measure()];

const arrayOfSize = (size) => Array.from(Array(size));

const getControls = () => {
  const numberOfcontrols = random.numberBetween(
      NUMBER_OF_CONTROLS.MIN,
      NUMBER_OF_CONTROLS.MAX
  );
  return arrayOfSize(numberOfcontrols).map(getControlParams);
};

const addFeatureControls = (state, feature) =>{
  state[feature] = getControls();
  return state;
};

const controlsForFeature = Object.keys(features)
    .reduce(addFeatureControls, {});

module.exports = controlsForFeature;

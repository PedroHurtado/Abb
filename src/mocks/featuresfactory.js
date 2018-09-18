const {features} = require('../models');
const controlsForFeature = require('./controlsforfeature');
const createControl = require('./controlfactory');

const instantiateControl = (params) => createControl(...params);

const getControls = (feature) => {
  return controlsForFeature[feature].map(instantiateControl);
};

const createFeature = (feature) => {
  const featureCtor = features[feature];
  const featureControls = getControls(feature);
  return Reflect.construct(featureCtor, [featureControls]);
};

const create = () => {
  return Object.keys(controlsForFeature).map(createFeature);
};

module.exports = create;

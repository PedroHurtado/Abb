const cache = require('../cache');
const {stdDev} = require('../utils');

const devOutTotal = (control) => {
  const feature = control.feature;
  const part = feature.part;
  const controls = cache.getControls(part, feature, control);
  return stdDev(controls.map((control)=>control.measured));
};

module.exports = devOutTotal;

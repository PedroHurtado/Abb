const CODES = require('./statecodes');

const THRESHOLDS = {
  GREEN: 5,
  YELLOW: 7,
};

const getState = (control) => {
  const {dev} = control;
  if (dev <= THRESHOLDS.GREEN) {
    return CODES.GREEN;
  }
  if (dev <= THRESHOLDS.YELLOW) {
    return CODES.YELLOW;
  }
  return CODES.RED;
};

module.exports = getState;

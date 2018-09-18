const {RED, YELLOW, GREEN} = require('./statecodes');

const hasState = (code) => (control) => control.state === code;

const getState = (feature) => {
  const controls = feature.controls;
  if (controls.some(hasState(RED))) {
    return RED;
  }
  if (controls.some(hasState(YELLOW))) {
    return YELLOW;
  }
  return GREEN;
};

module.exports = getState;

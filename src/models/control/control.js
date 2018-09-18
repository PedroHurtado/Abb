const {getDevOutTotal, getControlState} = require('../../services');

class Control {
  constructor(name, expected, measured) {
    this.name = name;
    this.expected = expected;
    this.measured = measured;
    this.feature = null;
  }
  get dev() {
    return Math.abs(this.expected - this.measured);
  }
  get devOutTotal() {
    return getDevOutTotal(this);
  }
  get state() {
    return getControlState(this);
  }
  toJSON() {
    return {
      name: this.name,
      dev: this.dev,
      devOutTotal: parseFloat(this.devOutTotal).toFixed(3),
      state: this.state,
    };
  }
}

module.exports = Control;

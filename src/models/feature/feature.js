const {getFeatureState} = require('../../services');

class Feature {
  constructor(name, controls) {
    this.name = name;
    this.controls = controls;
    this.part = null;
    this._setControlsFeature();
  }
  get state() {
    return getFeatureState(this);
  }
  _setControlsFeature() {
    this.controls.forEach((control) => {
      control.feature = this;
    });
  }
  toJSON() {
    return {
      name: this.name,
      controls: this.controls,
      state: this.state,
    };
  }
}

module.exports = Feature;

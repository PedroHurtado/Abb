class Part {
  constructor(name, features) {
    this.name = name;
    this.features = features;
    this._setFeaturesPart();
  }
  _setFeaturesPart() {
    this.features.forEach((feature) => {
      feature.part = this;
    });
  }
  serialize() {
    return {
      name: this.name,
      features: this.features,
    };
  }
}

module.exports = Part;

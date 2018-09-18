const {flatten} = require('./utils');
const PARTS_TO_KEEP = 7;

class PartCache {
  constructor() {
    this.cache = {};
  }
  add(part) {
    this.cache[part.name] = this.cache[part.name] || [];
    const partCache = this.cache[part.name];
    if (partCache.length === PARTS_TO_KEEP) {
      partCache.pop();
    }
    partCache.unshift(this._normalize(part));
  }
  _normalize(part) {
    return part.features.reduce((features, feature) => {
      features[feature.name] = feature.controls;
      return features;
    }, {});
  }
  _getAllControls(part, feature) {
    const allFeatures = this.cache[part.name];
    const featureControls = allFeatures
        .map((features) => features[feature.name]);
    return flatten(featureControls);
  }
  getControls(part, feature, control) {
    const controls = this._getAllControls(part, feature)
        .filter((cachedControl) => cachedControl.name === control.name);
    return controls;
  }
}

module.exports = new PartCache();

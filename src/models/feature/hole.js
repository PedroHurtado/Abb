const Feature = require('./feature');

class Hole extends Feature {
  constructor(controls) {
    super(Hole.name, controls);
  }
}

module.exports = Hole;

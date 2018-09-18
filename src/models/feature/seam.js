const Feature = require('./feature');

class Seam extends Feature {
  constructor(controls) {
    super(Seam.name, controls);
  }
}

module.exports = Seam;

const Feature = require('./feature');

class Slot extends Feature {
  constructor(controls) {
    super(Slot.name, controls);
  }
}

module.exports = Slot;

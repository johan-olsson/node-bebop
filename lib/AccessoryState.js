

"use strict";

var commandToBuffer = require("./commandToBuffer");

var AccessoryState = module.exports = function(self) {
  this.self = self;
};

AccessoryState.prototype.AccessoryConfigModificationEnabled = function(enabled) {

  var buffer = commandToBuffer(1, "AccessoryState", "AccessoryConfigModificationEnabled", enabled);

  this.self._writePacket(this.self._networkFrameGenerator(buffer));
  return this.self;
};
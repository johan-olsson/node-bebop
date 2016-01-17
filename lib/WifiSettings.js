

"use strict";

var commandToBuffer = require("./commandToBuffer");

var WifiSettings = module.exports = function(self) {
  this.self = self;
};

WifiSettings.prototype.OutdoorSetting = function(outdoor) {

  var buffer = commandToBuffer(1, "WifiSettings", "OutdoorSetting", outdoor);

  this.self._writePacket(this.self._networkFrameGenerator(buffer));
  return this.self;
};
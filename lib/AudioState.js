

"use strict";

var commandToBuffer = require("./commandToBuffer");

var AudioState = module.exports = function(self) {
  this.self = self;
};

AudioState.prototype.AudioStreamingRunning = function(running) {

  var buffer = commandToBuffer(1, "AudioState", "AudioStreamingRunning", running);

  this.self._writePacket(this.self._networkFrameGenerator(buffer));
  return this.self;
};
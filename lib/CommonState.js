

"use strict";

var commandToBuffer = require("./commandToBuffer");

var CommonState = module.exports = function(self) {
  this.self = self;
};

CommonState.prototype.ProductModel = function(model) {

  var buffer = commandToBuffer(1, "CommonState", "ProductModel", model);

  this.self._writePacket(this.self._networkFrameGenerator(buffer));
  return this.self;
};

CommonState.prototype.CountryListKnown = function(obj) {

  var buffer = commandToBuffer(1, "CommonState", "CountryListKnown", obj);

  this.self._writePacket(this.self._networkFrameGenerator(buffer));
  return this.self;
};
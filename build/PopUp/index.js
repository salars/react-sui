'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _PopUp = require('./PopUp');

Object.keys(_PopUp).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _PopUp[key];
    }
  });
});
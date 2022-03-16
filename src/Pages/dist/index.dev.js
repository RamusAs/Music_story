"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Home = require("./Home");

Object.keys(_Home).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Home[key];
    }
  });
});

var _Detail = require("./Detail");

Object.keys(_Detail).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _Detail[key];
    }
  });
});
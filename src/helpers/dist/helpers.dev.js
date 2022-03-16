"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = exports.getSong = void 0;

var _song = _interopRequireDefault(require("../data/song.json"));

var _data = _interopRequireDefault(require("../data/data.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSong = function getSong(name) {
  return _song["default"][name];
};

exports.getSong = getSong;

var getData = function getData(index) {
  return _data["default"][index];
};

exports.getData = getData;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getTextColor = exports.getPeriod = exports.getData = exports.getSong = void 0;

var _song = _interopRequireDefault(require("../data/song.json"));

var _data = _interopRequireDefault(require("../data/data.json"));

var _periods = _interopRequireDefault(require("../data/periods.json"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getSong = function getSong(name) {
  return _song["default"][name];
};

exports.getSong = getSong;

var getData = function getData(index) {
  return _data["default"][index];
};

exports.getData = getData;

var getPeriod = function getPeriod(index) {
  return _periods["default"][index];
};

exports.getPeriod = getPeriod;

var rgbToHex = function rgbToHex(color) {
  var rgb = color.slice(4, -1).split(', ');
  var r = rgb[0];
  var g = rgb[1];
  var b = rgb[2];
  return ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};
/**
 * Retourne la couleur dark ou light en fonction de bgColor.
 * bgColor doit être au format hexa : #112233.
 */


var getTextColor = function getTextColor(bgColor) {
  var dark = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "#363636";
  var light = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "#fafafa";
  var hexcolor = rgbToHex(bgColor);
  var r = parseInt(hexcolor.substr(0, 2), 16);
  var g = parseInt(hexcolor.substr(2, 2), 16);
  var b = parseInt(hexcolor.substr(4, 2), 16);
  var yiq = (r * 299 + g * 587 + b * 114) / 1000;
  return yiq >= 48 ? dark : light;
};

exports.getTextColor = getTextColor;
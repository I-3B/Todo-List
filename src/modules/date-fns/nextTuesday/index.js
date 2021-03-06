"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = nextTuesday;

var _index = _interopRequireDefault(require("../_lib/requiredArgs/index.js"));

var _index2 = _interopRequireDefault(require("../nextDay/index.js"));

var _index3 = _interopRequireDefault(require("../toDate/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @name nextTuesday
 * @category Weekday Helpers
 * @summary When is the next Tuesday?
 *
 * @description
 * When is the next Tuesday?
 *
 * @param {Date | number} date - the date to check
 * @returns {Date} - the date is the next Tuesday
 * @throws {TypeError} - the date should be a valid date
 * @throws {TypeError} - 1 argument required
 *
 * @example
 * When is the next Tuesday after Mar, 22, 2020?
 * const result = nextTuesday(new Date(2020, 2, 22))
 * => Tue Mar 24 2020 00:00:00
 **/
function nextTuesday(date) {
  (0, _index.default)(1, arguments);
  return (0, _index2.default)((0, _index3.default)(date), 2);
}

module.exports = exports.default;
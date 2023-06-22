'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _NumberInput = require('./NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _ComponentContainer = require('./ComponentContainer');

var _ComponentContainer2 = _interopRequireDefault(_ComponentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var PercentInput = function PercentInput(_ref) {
  var value = _ref.value,
      inputProps = _objectWithoutProperties(_ref, ['value']);

  return _react2.default.createElement(_NumberInput2.default, _extends({}, inputProps, {
    value: value > 100 ? 100 : value
  }));
};

PercentInput.propTypes = {
  onChange: _propTypes2.default.func.isRequired,
  value: _propTypes2.default.number
};

PercentInput.defaultProps = {
  maxLength: 4,
  suffix: '%'
};

exports.default = PercentInput;
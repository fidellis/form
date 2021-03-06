'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Label = require('./Label');

var _Label2 = _interopRequireDefault(_Label);

require('./input.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var ComponentContainer = function ComponentContainer(_ref) {
    var children = _ref.children,
        label = _ref.label,
        style = _ref.style,
        props = _objectWithoutProperties(_ref, ['children', 'label', 'style']);

    return _react2.default.createElement(
        'div',
        { style: _extends({ display: 'flex', flexDirection: 'column' }, style) },
        _react2.default.createElement(
            _Label2.default,
            null,
            label
        ),
        children
    );
};

ComponentContainer.defaultProps = {};

exports.default = ComponentContainer;
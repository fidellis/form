'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function getStyle(style) {
  return {
    container: _extends({
      border: '1px solid rgba(0,0,0,0.125)',
      borderRadius: 4,
      background: '#FFF',
      marginBottom: 16
    }, style.container),
    header: _extends({
      padding: 20,
      borderBottom: '1px solid rgba(0,0,0,0.125)',
      color: '#212529',
      fontSize: 15
    }, style.header),
    body: _extends({
      padding: 20
    }, style.body)
  };
};

var Section = function Section(_ref) {
  var children = _ref.children,
      title = _ref.title,
      style = _ref.style,
      props = _objectWithoutProperties(_ref, ['children', 'title', 'style']);

  var styles = getStyle(style);
  return _react2.default.createElement(
    'div',
    { style: styles.container },
    _react2.default.createElement(
      'div',
      { style: styles.header },
      title
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      children
    )
  );
};

Section.defaultProps = {
  style: {}
};

exports.default = Section;
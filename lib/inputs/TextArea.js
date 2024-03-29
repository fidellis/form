'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ComponentContainer = require('./ComponentContainer');

var _ComponentContainer2 = _interopRequireDefault(_ComponentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var TextArea = function TextArea(props) {
  var label = props.label,
      maxLength = props.maxLength,
      value = props.value,
      _onChange = props.onChange,
      _onBlur = props.onBlur,
      style = props.style,
      inputProps = _objectWithoutProperties(props, ['label', 'maxLength', 'value', 'onChange', 'onBlur', 'style']);
  // const info = maxLength ? `${value.length} / ${maxLength}` : null;


  return _react2.default.createElement(
    _ComponentContainer2.default,
    { label: label },
    _react2.default.createElement('textarea', _extends({}, inputProps, {
      onChange: function onChange(e) {
        return _onChange({ e: e, id: e.target.id, value: e.target.value });
      },
      onBlur: function onBlur(e) {
        return _onBlur({ e: e, id: e.target.id, value: e.target.value });
      },
      className: 'input input-textarea',
      value: value
    }))
  );
};

TextArea.defaultProps = {
  value: '',
  onBlur: function onBlur() {
    return null;
  },
  rows: 3
};

exports.default = TextArea;
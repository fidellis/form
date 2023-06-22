'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function mask() {
    var v = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    return v.replace(/\D+/g, '') // não deixa ser digitado nenhuma letra
    .replace(/(\d{2})(\d)/, '$1.$2') // captura 2 grupos de número o primeiro com 2 digitos e o segundo de com 3 digitos, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de número
    .replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d)/, '$1/$2') // captura 2 grupos de número o primeiro e o segundo com 3 digitos, separados por /
    .replace(/(\d{4})(\d)/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1'); // captura os dois últimos 2 números, com um - antes dos dois números
}
var PercentInput = function PercentInput(_ref) {
    var value = _ref.value,
        _onChange = _ref.onChange,
        inputProps = _objectWithoutProperties(_ref, ['value', 'onChange']);

    return _react2.default.createElement(_TextInput2.default, _extends({}, inputProps, {
        value: mask(value),
        onChange: function onChange(e) {
            return _onChange(_extends({}, e, { value: e.value.replace(/\D/g, '').replace(/\./g, '').replace(/\-/g, '').replace(/\//g, '') }));
        },
        maxLength: 18
    }));
};

PercentInput.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    value: _propTypes2.default.number
};

PercentInput.defaultProps = {
    id: 'cnpj',
    label: 'CNPJ'
};

exports.default = PercentInput;
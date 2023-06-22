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

    return v.replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2').replace(/(\d{3})(\d{1,2})/, '$1-$2').replace(/(-\d{2})\d+?$/, '$1'); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}
var PercentInput = function PercentInput(_ref) {
    var value = _ref.value,
        _onChange = _ref.onChange,
        inputProps = _objectWithoutProperties(_ref, ['value', 'onChange']);

    return _react2.default.createElement(_TextInput2.default, _extends({}, inputProps, {
        value: mask(value),
        onChange: function onChange(e) {
            return _onChange(_extends({}, e, { value: e.value.replace(/\D/g, '').replace(/\./g, '').replace(/\-/g, '') }));
        },
        maxLength: 14
    }));
};

PercentInput.propTypes = {
    onChange: _propTypes2.default.func.isRequired,
    value: _propTypes2.default.number
};

PercentInput.defaultProps = {
    id: 'cpf',
    label: 'CPF'
};

exports.default = PercentInput;
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('react-datetime/css/react-datetime.css');

var _TextInput = require('./TextInput');

var _TextInput2 = _interopRequireDefault(_TextInput);

var _ComponentContainer = require('./ComponentContainer');

var _ComponentContainer2 = _interopRequireDefault(_ComponentContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DateInput = function DateInput(_ref) {
  var label = _ref.label,
      _onChange = _ref.onChange,
      id = _ref.id,
      closeOnSelect = _ref.closeOnSelect,
      timeFormat = _ref.timeFormat,
      isValidDate = _ref.isValidDate,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      value = _ref.value,
      disabled = _ref.disabled,
      inputProps = _objectWithoutProperties(_ref, ['label', 'onChange', 'id', 'closeOnSelect', 'timeFormat', 'isValidDate', 'minDate', 'maxDate', 'value', 'disabled']);

  setTimeout(function () {
    var dateInputs = document.querySelectorAll('[type="date"]');
    dateInputs.forEach(function (el) {
      el.addEventListener('dblclick', function () {
        el.type = "text";
        setTimeout(function () {
          el.select();
        });
      });
      el.addEventListener('focusout', function () {
        el.type = "date";
      });
    });
  }, 1000);

  return _react2.default.createElement(
    _ComponentContainer2.default,
    { label: label },
    !disabled ? _react2.default.createElement('input', _extends({}, inputProps, {
      type: 'date',
      id: id
      // value={value ? moment(value).utc() : null}
      , value: value ? (0, _moment2.default)(value).format('YYYY-MM-DD') : null
      // dataDateFormat="DD-MM-YYYY"
      // closeOnSelect={closeOnSelect}
      // timeFormat={timeFormat}
      // isValidDate={(current) => {
      //   const isValidMin = minDate ? current > minDate : true;
      //   const isValidMax = maxDate ? current <= maxDate : true;

      //   return isValidDate(current) && isValidMin && isValidMax;
      // }}
      // onChange={date => onChange({ id, value: date })}
      , onChange: function onChange(date) {
        // if (moment(date.target.value, 'DD/MM/YYYY')._isValid) {            
        //   date.target.value = moment(date.target.value, 'DD/MM/YYYY').format('YYYY-MM-DD')
        // }
        _onChange({ id: id, value: (0, _moment2.default)(date.target.value).format('YYYY-MM-DD') });
      }
      //inputProps={{ className: 'input input-date', ...inputProps }}
      , className: 'input input-date'
      //dateFormat="DD/MM/YYYY"
      , locale: 'pt-br'
    })) : _react2.default.createElement(_TextInput2.default, { value: value ? (0, _moment2.default)(value).format('DD/MM/YYYY') : null, textAlign: 'right', disabled: true })
  );
};

DateInput.defaultProps = {
  closeOnSelect: true,
  timeFormat: false,
  isValidDate: function isValidDate() {
    return true;
  }
};

exports.default = DateInput;
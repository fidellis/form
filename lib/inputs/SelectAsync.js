'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };
// import _debounce from 'lodash/debounce';


var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _async = require('react-select/async');

var _async2 = _interopRequireDefault(_async);

var _ComponentContainer = require('./ComponentContainer');

var _ComponentContainer2 = _interopRequireDefault(_ComponentContainer);

var _awesomeDebouncePromise = require('awesome-debounce-promise');

var _awesomeDebouncePromise2 = _interopRequireDefault(_awesomeDebouncePromise);

require('./react-select.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function convertOptions(_ref) {
  var options = _ref.options,
      optionValue = _ref.optionValue,
      optionLabel = _ref.optionLabel,
      labelRenderer = _ref.labelRenderer;

  return options.map(function (option) {
    return _extends({}, option, { value: option[optionValue], label: labelRenderer ? labelRenderer(option) : option[optionLabel] });
  });
}

function promiseOptions(_ref2) {
  var inputValue = _ref2.inputValue,
      getOptions = _ref2.getOptions,
      params = _ref2.params,
      isDisabled = _ref2.isDisabled;

  // if (inputValue) {
  return new Promise(function (resolve) {
    // setTimeout(() => {
    resolve(isDisabled ? function () {} : getOptions(inputValue, params));
    // }, 500);
  });
  // }
  // return Promise.resolve();
}

// const searchAPIDebounced = _debounce(p => promiseOptions(p), 500);
var searchAPIDebounced = (0, _awesomeDebouncePromise2.default)(function (p) {
  return promiseOptions(p);
}, 500);

var SelectAsync = function (_Component) {
  _inherits(SelectAsync, _Component);

  function SelectAsync(props) {
    _classCallCheck(this, SelectAsync);

    var _this = _possibleConstructorReturn(this, (SelectAsync.__proto__ || Object.getPrototypeOf(SelectAsync)).call(this, props));

    _this.state = {
      value: props.value
    };

    // this.promiseOptions = this.promiseOptions.bind(this);
    _this.debounce = _this.debounce.bind(_this);
    return _this;
  }

  _createClass(SelectAsync, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var value = this.state.value;

      if (value) {
        this.setValue(value, { initial: true });
      }
    }
  }, {
    key: 'componentWillReceiveProps',
    value: function componentWillReceiveProps(_ref3) {
      var value = _ref3.value;

      if (value !== this.props.value) {
        this.setValue(value);
      }
    }
  }, {
    key: 'setValue',
    value: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(value, params) {
        var data;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                data = null;

                if (!value) {
                  _context.next = 8;
                  break;
                }

                _context.next = 4;
                return Promise.resolve(this.props.getOptions(value, params));

              case 4:
                data = _context.sent;

                this.setState({ value: data[0] });
                _context.next = 9;
                break;

              case 8:
                this.setState({ value: null });

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function setValue(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return setValue;
    }()

    // promiseOptions(inputValue) {
    // return new Promise((resolve) => {
    // resolve(this.props.isDisabled ? () => { } : this.props.getOptions(inputValue, this.props.params));
    // });
    // }

  }, {
    key: 'debounce',
    value: function () {
      var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(inputValue) {
        var _props, getOptions, isDisabled, params, optionValue, optionLabel, labelRenderer, result;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _props = this.props, getOptions = _props.getOptions, isDisabled = _props.isDisabled, params = _props.params, optionValue = _props.optionValue, optionLabel = _props.optionLabel, labelRenderer = _props.labelRenderer;
                _context2.next = 3;
                return searchAPIDebounced({ inputValue: inputValue, getOptions: getOptions, params: params, isDisabled: isDisabled });

              case 3:
                result = _context2.sent;
                return _context2.abrupt('return', convertOptions({ options: result, optionValue: optionValue, optionLabel: optionLabel, labelRenderer: labelRenderer }));

              case 5:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function debounce(_x3) {
        return _ref5.apply(this, arguments);
      }

      return debounce;
    }()
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          label = _props2.label,
          isMulti = _props2.isMulti,
          value = _props2.value,
          getOptions = _props2.getOptions,
          _onChange = _props2.onChange,
          id = _props2.id,
          optionValue = _props2.optionValue,
          optionLabel = _props2.optionLabel,
          labelRenderer = _props2.labelRenderer,
          style = _props2.style,
          inputProps = _objectWithoutProperties(_props2, ['label', 'isMulti', 'value', 'getOptions', 'onChange', 'id', 'optionValue', 'optionLabel', 'labelRenderer', 'style']);

      return _react2.default.createElement(
        _ComponentContainer2.default,
        { label: label },
        _react2.default.createElement(_async2.default, _extends({}, inputProps, {
          closeMenuOnSelect: !isMulti,
          loadOptions: this.debounce,
          value: this.state.value || '',
          cacheOptions: true,
          defaultOptions: true,
          onChange: function onChange(v) {
            return _onChange(_extends({}, v, { id: id, value: v[optionValue] }));
          },
          styles: { container: function container(provided) {
              return _extends({}, provided, style);
            }, menu: function menu(provided) {
              return _extends({}, provided, { zIndex: 999 });
            } }
        }))
      );
    }
  }]);

  return SelectAsync;
}(_react.Component);

SelectAsync.defaultProps = {
  options: [],
  searchable: true,
  isMulti: false,
  optionValue: 'value',
  optionLabel: 'label',
  clearAllText: 'Remover todos',
  placeholder: '',
  noResultsText: 'Nenhum resultado encontrado.',
  onChange: function onChange() {
    return console.log('onchange não definido');
  }
  // params: {
  // limit: 10,
  // },
  // getOptionLabel: option => null,
};

exports.default = SelectAsync;
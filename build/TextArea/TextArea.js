'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _coreDecorators = require('core-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextArea = function (_Component) {
    _inherits(TextArea, _Component);

    function TextArea() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TextArea);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TextArea.__proto__ || Object.getPrototypeOf(TextArea)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            number: ''
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TextArea, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props = this.props,
                maxlength = _props.maxlength,
                value = _props.value;

            this.setState({ number: maxlength - value.length });
        }
    }, {
        key: 'onChange',
        value: function onChange(e) {
            var value = e.target.value;
            var _props2 = this.props,
                name = _props2.name,
                change = _props2.change,
                maxlength = _props2.maxlength;

            this.setState({ number: maxlength - this.refs.input.value.length });
            change(name, value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                placeholder = _props3.placeholder,
                maxlength = _props3.maxlength,
                value = _props3.value,
                character = _props3.character;
            var number = this.state.number;

            return _react2.default.createElement(
                'div',
                { style: { position: 'relative' } },
                _react2.default.createElement(
                    'textarea',
                    { placeholder: placeholder, ref: 'input', className: 'form-control', onChange: this.onChange, maxLength: maxlength || 10000, value: value },
                    value
                ),
                _react2.default.createElement(
                    'pre',
                    { ref: 'pre', style: { position: 'absolute', visibility: 'hidden', whiteSpace: 'pre-wrap', width: '100%' } },
                    value
                ),
                character ? _react2.default.createElement(
                    'div',
                    { style: { position: 'absolute', right: '.5rem', bottom: '0' } },
                    '\u8FD8\u53EF\u4EE5\u8F93\u5165',
                    _react2.default.createElement(
                        'span',
                        { style: { color: 'red', fontWeight: 'normal' } },
                        number
                    ),
                    '\u5B57'
                ) : null
            );
        }
    }]);

    return TextArea;
}(_react.Component);

TextArea.props = {
    change: _propTypes2.default.func,
    name: _propTypes2.default.string,
    value: _propTypes2.default.string,
    maxlength: _propTypes2.default.number,
    placeholder: _propTypes2.default.string,
    character: _propTypes2.default.string
};
exports.default = (0, _helpers.composeTheme)(TextArea);
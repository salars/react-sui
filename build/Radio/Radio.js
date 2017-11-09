'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _RadioItem = require('./RadioItem');

var _RadioItem2 = _interopRequireDefault(_RadioItem);

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

var Radio = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(Radio, _Component);

    function Radio() {
        _classCallCheck(this, Radio);

        return _possibleConstructorReturn(this, (Radio.__proto__ || Object.getPrototypeOf(Radio)).apply(this, arguments));
    }

    _createClass(Radio, [{
        key: '_change',
        value: function _change(value) {
            var _props = this.props,
                change = _props.change,
                name = _props.name;

            change(name, value);
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _props2 = this.props,
                name = _props2.name,
                change = _props2.change,
                value = _props2.value,
                config = _props2.config;

            if (config.options && config.options.length) {
                var val = config.options[0].value;
                change(name, val);
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props3 = this.props,
                value = _props3.value,
                config = _props3.config;
            var options = config.options;

            return _react2.default.createElement(
                'div',
                { className: 'radio' },
                options ? options.map(function (item, i) {
                    return _react2.default.createElement(_RadioItem2.default, { data: item, checked: value == item.value, click: _this2._change, key: i });
                }) : null
            );
        }
    }]);

    return Radio;
}(_react.Component)) || _class;

Radio.props = {
    name: _propTypes2.default.string,
    change: _propTypes2.default.func,
    value: _propTypes2.default.string,
    config: _propTypes2.default.object
};
exports.default = (0, _helpers.composeTheme)(Radio);
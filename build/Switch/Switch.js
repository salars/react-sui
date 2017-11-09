'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../helpers');

var _coreDecorators = require('core-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Switch = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(Switch, _Component);

    function Switch() {
        _classCallCheck(this, Switch);

        return _possibleConstructorReturn(this, (Switch.__proto__ || Object.getPrototypeOf(Switch)).apply(this, arguments));
    }

    _createClass(Switch, [{
        key: 'valueChange',
        value: function valueChange() {
            var _props = this.props,
                name = _props.name,
                value = _props.value,
                change = _props.change;

            change && change(name, !value);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                value = _props2.value,
                text = _props2.text,
                t = _props2.t;

            var style = value ? { backgroundColor: t.PRIMARY_COLOR } : {};
            var innerStyle = text && value ? { marginLeft: '6px', marginRight: '24px' } : { marginLeft: '24px', marginRight: '6px' };
            return _react2.default.createElement(
                'span',
                {
                    className: 'switch ' + (value ? 'switch-checked' : ''),
                    style: _extends({
                        position: 'relative',
                        display: 'inline-block',
                        boxSizing: 'border-box',
                        height: '22px',
                        minWidth: '44px',
                        lineHeight: '20px',
                        verticalAlign: 'middle',
                        borderRadius: '20px',
                        border: '1px solid transparent',
                        backgroundColor: 'rgba(0,0,0,.25)',
                        cursor: 'pointer',
                        transition: 'all .36s',
                        WebkitTransition: 'all .36s'
                    }, style),
                    onClick: this.valueChange
                },
                _react2.default.createElement(
                    'span',
                    { style: _extends({
                            color: '#fff',
                            fontSize: '12px',
                            display: 'block'
                        }, innerStyle) },
                    text ? value ? text.checked : text.unchecked : ''
                )
            );
        }
    }]);

    return Switch;
}(_react.Component)) || _class;

Switch.props = {
    name: _propTypes2.default.string,
    value: _propTypes2.default.bool,
    change: _propTypes2.default.func,
    text: _propTypes2.default.object
};
Switch.defaultProps = {
    value: false
};
exports.default = (0, _helpers.composeTheme)(Switch);
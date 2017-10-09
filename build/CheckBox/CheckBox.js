'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _coreDecorators = require('core-decorators');

require('../../app/css/normal.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var CheckBox = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(CheckBox, _Component);

    function CheckBox() {
        _classCallCheck(this, CheckBox);

        return _possibleConstructorReturn(this, (CheckBox.__proto__ || Object.getPrototypeOf(CheckBox)).apply(this, arguments));
    }

    _createClass(CheckBox, [{
        key: 'check',
        value: function check() {
            var _props = this.props,
                name = _props.name,
                fnClick = _props.fnClick,
                checked = _props.checked;

            fnClick && fnClick(name, !checked);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                t = _props2.t,
                text = _props2.text,
                checked = _props2.checked;

            return _react2.default.createElement(
                'div',
                { style: {
                        display: 'inline-block'
                    } },
                _react2.default.createElement('div', { className: "checkBox" + (checked ? " checked" : ""), onClick: this.check, style: {
                        verticalAlign: 'Middle'
                    } }),
                text ? _react2.default.createElement(
                    'span',
                    { style: {
                            margin: '0 .3rem'
                        } },
                    text
                ) : ""
            );
        }
    }]);

    return CheckBox;
}(_react.Component)) || _class;

CheckBox.Props = {
    text: _propTypes2.default.string,
    name: _propTypes2.default.string,
    fnClick: _propTypes2.default.func,
    checked: _propTypes2.default.bool
};
exports.default = (0, _helpers.composeTheme)(CheckBox);
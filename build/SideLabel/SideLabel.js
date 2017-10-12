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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SideLabel = function (_Component) {
    _inherits(SideLabel, _Component);

    function SideLabel() {
        _classCallCheck(this, SideLabel);

        return _possibleConstructorReturn(this, (SideLabel.__proto__ || Object.getPrototypeOf(SideLabel)).apply(this, arguments));
    }

    _createClass(SideLabel, [{
        key: 'render',
        value: function render() {
            var label = this.props.label;

            return _react2.default.createElement(
                'div',
                { style: { marginBottom: '1rem' } },
                _react2.default.createElement('span', { style: { width: '.35rem', height: '1.25rem', background: '#34bf98', display: 'inline-block', verticalAlign: 'middle', marginRight: '.3rem' } }),
                _react2.default.createElement(
                    'span',
                    { style: { fontSize: '.9rem' } },
                    label
                )
            );
        }
    }]);

    return SideLabel;
}(_react.Component);

SideLabel.props = {
    label: _propTypes2.default.string
};
exports.default = (0, _helpers.composeTheme)(SideLabel);
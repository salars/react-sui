'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Section = function (_Component) {
    _inherits(Section, _Component);

    function Section() {
        _classCallCheck(this, Section);

        return _possibleConstructorReturn(this, (Section.__proto__ || Object.getPrototypeOf(Section)).apply(this, arguments));
    }

    _createClass(Section, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                title = _props.title,
                t = _props.t;

            return _react2.default.createElement(
                'div',
                { style: { marginBottom: t.GRID_GUTTER_HALF_WIDTH } },
                title ? _react2.default.createElement(
                    'div',
                    { style: { fontSize: t.FONT_SIZE_BASE, color: t.GRAY_LIGHT } },
                    title
                ) : null,
                _react2.default.createElement(
                    'div',
                    null,
                    this.props.children
                )
            );
        }
    }]);

    return Section;
}(_react.Component);

exports.default = (0, _helpers.composeTheme)(Section);
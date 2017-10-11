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

var Col = function (_Component) {
    _inherits(Col, _Component);

    function Col() {
        _classCallCheck(this, Col);

        return _possibleConstructorReturn(this, (Col.__proto__ || Object.getPrototypeOf(Col)).apply(this, arguments));
    }

    _createClass(Col, [{
        key: 'getClassName',
        value: function getClassName() {
            var props = this.props;
            return ['lg', 'md', 'sm', 'xs'].map(function (item) {
                if (props[item]) {
                    return 'col-' + item + '-' + props[item];
                } else {
                    return "";
                }
            }).join(" ");
        }
    }, {
        key: 'render',
        value: function render() {
            var className = this.getClassName();
            return _react2.default.createElement(
                'div',
                { className: className },
                this.props.children
            );
        }
    }]);

    return Col;
}(_react.Component);

Col.props = {
    lg: _propTypes2.default.string,
    md: _propTypes2.default.string,
    sm: _propTypes2.default.string,
    xs: _propTypes2.default.string
};
exports.default = (0, _helpers.composeTheme)(Col);
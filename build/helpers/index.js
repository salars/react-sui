'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.rem = exports.composeTheme = exports.compose = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _theme = require('../store/theme');

var _theme2 = _interopRequireDefault(_theme);

var _mobxReact = require('mobx-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var compose = function compose(_ref) {
    var t = _ref.t,
        newProps = _objectWithoutProperties(_ref, ['t']);

    return function (BaseComponent) {
        var _class;

        var CompoundComponent = (0, _mobxReact.observer)(_class = function (_Component) {
            _inherits(CompoundComponent, _Component);

            function CompoundComponent() {
                _classCallCheck(this, CompoundComponent);

                return _possibleConstructorReturn(this, (CompoundComponent.__proto__ || Object.getPrototypeOf(CompoundComponent)).apply(this, arguments));
            }

            _createClass(CompoundComponent, [{
                key: 'render',
                value: function render() {
                    var props = this.props;
                    return _react2.default.createElement(BaseComponent, _extends({}, props, newProps, { t: t.theme }));
                }
            }]);

            return CompoundComponent;
        }(_react.Component)) || _class;

        return CompoundComponent;
    };
};

exports.compose = compose;
var composeTheme = exports.composeTheme = compose({ t: _theme2.default });

var rem = exports.rem = function rem(size) {
    return size + "rem";
};
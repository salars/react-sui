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

var scrollTop = 100;

var BackTop = function (_Component) {
    _inherits(BackTop, _Component);

    function BackTop() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, BackTop);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = BackTop.__proto__ || Object.getPrototypeOf(BackTop)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            show: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(BackTop, [{
        key: 'onScroll',
        value: function onScroll() {
            var top = document.documentElement.scrollTop;
            if (top > scrollTop) {
                this.setState({ show: true });
            } else {
                this.setState({ show: false });
            }
        }
    }, {
        key: 'goTop',
        value: function goTop() {
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            document.addEventListener("scroll", this.onScroll);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.removeEventListener("scroll", this.onScroll);
        }
    }, {
        key: 'render',
        value: function render() {
            var show = this.state.show;

            return _react2.default.createElement(
                'div',
                { className: 'back-top' + (show ? ' show' : ''), onClick: this.goTop },
                _react2.default.createElement('i', { className: 'fa fa-chevron-up', 'aria-hidden': 'true', style: { fontSize: '1.4rem', color: 'rgb(54, 155, 233)' } })
            );
        }
    }]);

    return BackTop;
}(_react.Component);

exports.default = (0, _helpers.composeTheme)(BackTop);
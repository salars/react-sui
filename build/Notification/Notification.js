'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.info = exports.warning = exports.success = exports.danger = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../helpers');

var _coreDecorators = require('core-decorators');

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Notification = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(Notification, _Component);

    function Notification() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Notification);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Notification.__proto__ || Object.getPrototypeOf(Notification)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            flag: true
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Notification, [{
        key: 'componentDidMount',
        value: function componentDidMount() {}
    }, {
        key: 'render',
        value: function render() {
            var _props = this.props,
                type = _props.type,
                msg = _props.msg;

            return _react2.default.createElement(
                'div',
                { className: 'fade-zoom-in-enter-active alert alert-' + type },
                msg
            );
        }
    }]);

    return Notification;
}(_react.Component)) || _class;

Notification.props = {
    type: _propTypes2.default.string,
    msg: _propTypes2.default.string
};
Notification.defaultProps = {
    type: 'info',
    msg: ''
};

var keyGrowth = 1;

var NotificationQueue = function (_Component2) {
    _inherits(NotificationQueue, _Component2);

    function NotificationQueue() {
        var _ref2;

        var _temp2, _this2, _ret2;

        _classCallCheck(this, NotificationQueue);

        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
        }

        return _ret2 = (_temp2 = (_this2 = _possibleConstructorReturn(this, (_ref2 = NotificationQueue.__proto__ || Object.getPrototypeOf(NotificationQueue)).call.apply(_ref2, [this].concat(args))), _this2), _this2.state = {
            queue: []
        }, _temp2), _possibleConstructorReturn(_this2, _ret2);
    }

    _createClass(NotificationQueue, [{
        key: 'pushQueue',
        value: function pushQueue(obj) {
            var _this3 = this;

            var queue = this.state.queue;

            obj.keyGrowth = keyGrowth++;
            queue.push(obj);
            this.setState({ queue: queue }, function () {
                setTimeout(function () {
                    _this3.popQueue(obj);
                }, 3000);
            });
        }
    }, {
        key: 'popQueue',
        value: function popQueue(obj) {
            var queue = this.state.queue;

            var newQueue = queue.filter(function (item) {
                return item !== obj;
            });
            this.setState({ queue: newQueue });
        }
    }, {
        key: 'render',
        value: function render() {
            var queue = this.state.queue;

            return _react2.default.createElement(
                'div',
                null,
                queue.map(function (obj) {
                    return _react2.default.createElement(Notification, { key: obj.keyGrowth, type: obj.type, msg: obj.msg });
                })
            );
        }
    }]);

    return NotificationQueue;
}(_react.Component);

if (!document.getElementById('notification-container')) {
    var div = document.createElement('div');
    div.setAttribute('id', 'notification-container');
    document.body.appendChild(div);
}
var notificationQueue = void 0;
_reactDom2.default.render(_react2.default.createElement(NotificationQueue, { ref: function ref(_ref3) {
        notificationQueue = _ref3;
    } }), document.getElementById('notification-container'));

var danger = exports.danger = function danger(msg) {
    notificationQueue.pushQueue({ msg: msg, type: 'danger' });
};

var success = exports.success = function success(msg) {
    notificationQueue.pushQueue({ msg: msg, type: 'success' });
};

var warning = exports.warning = function warning(msg) {
    notificationQueue.pushQueue({ msg: msg, type: 'warning' });
};

var info = exports.info = function info(msg, fn) {
    notificationQueue.pushQueue({ msg: msg, type: 'info' });
};
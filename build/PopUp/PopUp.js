'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.confirm = exports.info = exports.warning = exports.success = exports.error = exports.hideModal = exports.notif = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _helpers = require('../helpers');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _coreDecorators = require('core-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PopUp = function (_Component) {
    _inherits(PopUp, _Component);

    function PopUp() {
        _classCallCheck(this, PopUp);

        return _possibleConstructorReturn(this, (PopUp.__proto__ || Object.getPrototypeOf(PopUp)).apply(this, arguments));
    }

    _createClass(PopUp, [{
        key: 'fnClose',
        value: function fnClose() {
            this.props.setShow(false);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                msg = _props.msg,
                show = _props.show,
                buttons = _props.buttons,
                title = _props.title;

            return show ? _react2.default.createElement(
                'div',
                { className: 'popup-block' },
                _react2.default.createElement(
                    'div',
                    { className: 'modal-backdrop show' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal fade show', id: 'exampleModal', tabIndex: '-1', role: 'dialog',
                            'aria-labelledby': 'exampleModalLabel', 'aria-hidden': 'true' },
                        _react2.default.createElement(
                            'div',
                            { className: 'modal-dialog', role: 'document' },
                            _react2.default.createElement(
                                'div',
                                { className: 'modal-content' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'modal-header' },
                                    _react2.default.createElement(
                                        'h5',
                                        { className: 'modal-title', id: 'exampleModalLabel' },
                                        title
                                    ),
                                    _react2.default.createElement(
                                        'button',
                                        { type: 'button', className: 'close', 'data-dismiss': 'modal', 'aria-label': 'Close' },
                                        _react2.default.createElement(
                                            'span',
                                            { 'aria-hidden': 'true', onClick: this.fnClose },
                                            'x'
                                        )
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'modal-body' },
                                    msg
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: 'modal-footer' },
                                    buttons && buttons.length ? buttons.map(function (_ref, idx) {
                                        var text = _ref.text,
                                            action = _ref.action,
                                            className = _ref.className;

                                        return _react2.default.createElement(
                                            'button',
                                            { type: 'button',
                                                'data-dismiss': 'modal',
                                                onClick: function onClick(_) {
                                                    action && action(_this2.fnClose);
                                                },
                                                key: idx,
                                                className: className || "btn btn-primary" },
                                            text
                                        );
                                    }) : null
                                )
                            )
                        )
                    )
                )
            ) : null;
        }
    }]);

    return PopUp;
}(_react.Component);

PopUp.props = {
    msg: _propTypes2.default.string.isRequired,
    buttons: _propTypes2.default.array,
    type: _propTypes2.default.string,
    show: _propTypes2.default.bool
};
PopUp.defaultProps = {
    type: "default",
    text: "",
    title: ""
};


var node = document.getElementById('modal-container');
if (!node) {
    node = document.createElement("div");
    node.setAttribute("id", "modal-container");
    document.body.appendChild(node);
}

var notif = exports.notif = function notif(msg, title, buttons) {
    var show = true;
    if (msg === false) {
        show = false;
    }
    var render = function render() {
        _reactDom2.default.render(_react2.default.createElement(PopUp, { show: show, msg: msg, title: title, buttons: buttons, setShow: function setShow(flag) {
                show = flag;
                render();
            } }), node);
    };
    render();
};

var hideModal = exports.hideModal = function hideModal() {
    notif(false);
};
var error = exports.error = function error(msg) {
    notif(msg, '错误');
};

var success = exports.success = function success(msg) {
    notif(msg, '成功');
};

var warning = exports.warning = function warning(msg) {
    notif(msg, '警告');
};

var info = exports.info = function info(msg, fn) {
    notif(msg, '通知', [{
        text: "确定",
        action: function action(fnClose) {
            fn && fn(fnClose);
        }
    }]);
};
var confirm = exports.confirm = function confirm(msg, fn) {
    notif(msg, '提示信息', [{
        text: "确定",
        action: function action(fnClose) {
            fn && fn(fnClose);
        }
    }, {
        text: "取消",
        className: "btn btn-secondary",
        action: function action(fnClose) {
            fnClose && fnClose();
        }
    }]);
};

//
//
//
exports.default = (0, _helpers.composeTheme)(PopUp);
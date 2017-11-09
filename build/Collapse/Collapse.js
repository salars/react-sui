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

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Collapse = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(Collapse, _Component);

    function Collapse() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Collapse);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Collapse.__proto__ || Object.getPrototypeOf(Collapse)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            listMsg: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Collapse, [{
        key: 'handleShow',
        value: function handleShow(e, idx) {
            var listMsg = this.state.listMsg;

            e.preventDefault();
            listMsg[idx].showStatus = !listMsg[idx].showStatus;
            this.setState({ listMsg: listMsg });
        }
    }, {
        key: 'getClassName',
        value: function getClassName(idx) {
            var listMsg = this.state.listMsg;

            return listMsg[idx].showStatus ? "show" : "collapse";
        }
    }, {
        key: 'componentWillMount',
        value: function componentWillMount() {
            var msgs = this.props.msgs;

            msgs.map(function (item) {
                if (typeof item.showStatus != "boolean") {
                    item.showStatus = false;
                }
                return item;
            });
            this.setState({ listMsg: msgs });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _state = this.state,
                listMsg = _state.listMsg,
                calHeight = _state.calHeight;

            return _react2.default.createElement(
                'div',
                { className: 'tablist' },
                _react2.default.createElement(
                    'div',
                    { id: 'accordion' },
                    listMsg.length > 0 ? listMsg.map(function (item, index) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'card', key: index },
                            _react2.default.createElement(
                                'div',
                                { className: 'card-header' },
                                _react2.default.createElement(
                                    'h5',
                                    { className: 'mb-0' },
                                    _react2.default.createElement(
                                        'a',
                                        { 'data-toggle': 'collapse', href: '#awd', onClick: function onClick(e) {
                                                _this2.handleShow(e, index);
                                            } },
                                        item.title
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'div',
                                { id: 'collapseOne', className: _this2.getClassName(index) },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'card-body' },
                                    item.info
                                )
                            )
                        );
                    }) : null
                )
            );
        }
    }]);

    return Collapse;
}(_react.Component)) || _class;

Collapse.props = {
    msgs: []
};
exports.default = (0, _helpers.composeTheme)(Collapse);
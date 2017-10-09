'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../helpers');

var _Button = require('react-sui/Button');

var _coreDecorators = require('core-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Dropdown = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(Dropdown, _Component);

    function Dropdown() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Dropdown);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Dropdown.__proto__ || Object.getPrototypeOf(Dropdown)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            open: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Dropdown, [{
        key: 'itemClick',
        value: function itemClick(item) {
            if (this.props.toggle) {
                item.toggle = !item.toggle;
                this.setState({ open: true });
            }
            if (!item.disabled) {
                item.fnClick && item.fnClick(item.label, item.value, item.toggle);
            }
        }
    }, {
        key: 'globalEventHandler',
        value: function globalEventHandler(e) {
            if (e.path.includes(this.refs.dropDownHandler)) {
                this.setState(function (state) {
                    return { open: !state.open };
                });
            } else {
                this.setState({ open: false });
            }
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.body.addEventListener('click', this.globalEventHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.removeEventListener('click', this.globalEventHandler);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props = this.props,
                type = _props.type,
                t = _props.t,
                size = _props.size,
                label = _props.label,
                options = _props.options,
                split = _props.split,
                caret = _props.caret,
                right = _props.right,
                up = _props.up,
                iconName = _props.iconName;
            var open = this.state.open;

            return _react2.default.createElement(
                'div',
                { className: (up ? "dropup " : "dropdown ") + (open ? 'open' : ''), style: { display: 'inline-block' } },
                _react2.default.createElement(
                    'div',
                    { ref: 'dropDownHandler' },
                    split ? _react2.default.createElement(
                        _Button.ButtonGroup,
                        null,
                        iconName ? _react2.default.createElement('i', { className: "fa fa-" + iconName, 'aria-hidden': 'true', style: { marginRight: '.3rem' } }) : null,
                        _react2.default.createElement(_Button.Button, { label: label, type: type, size: size }),
                        caret ? _react2.default.createElement(
                            'button',
                            { className: 'btn btn-' + size + ' btn-' + type },
                            _react2.default.createElement('i', { className: "fa " + (up ? "fa-caret-up" : "fa-caret-down") })
                        ) : null
                    ) : _react2.default.createElement(
                        'button',
                        { className: 'btn btn-' + size + ' btn-' + type },
                        iconName ? _react2.default.createElement('i', { className: "fa fa-" + iconName, 'aria-hidden': 'true', style: { marginRight: '.3rem' } }) : null,
                        label,
                        caret ? _react2.default.createElement('i', { className: "fa " + (up ? "fa-caret-up" : "fa-caret-down"), style: { marginLeft: t.MARGIN_MEDIUM } }) : null
                    )
                ),
                _react2.default.createElement(
                    'ul',
                    { className: "dropdown-menu " + (right ? "dropdown-menu-right" : "") },
                    options.map(function (item, i) {
                        return _react2.default.createElement(
                            'li',
                            { key: i, ref: 'li', className: "dropdown-li " + (item.disabled ? "disabled" : ""), style: { cursor: 'pointer' }, onClick: function onClick(_) {
                                    return _this2.itemClick(item);
                                } },
                            _react2.default.createElement(
                                'a',
                                { style: item.toggle ? { color: '#aaa' } : {} },
                                item.iconName ? _react2.default.createElement('i', { className: "fa fa-" + item.iconName, 'aria-hidden': 'true', style: { display: 'inline-block', width: '25px' } }) : null,
                                item.label
                            )
                        );
                    })
                )
            );
        }
    }]);

    return Dropdown;
}(_react.Component)) || _class;

Dropdown.props = {
    type: _propTypes2.default.string,
    size: _propTypes2.default.string,
    label: _propTypes2.default.string,
    options: _propTypes2.default.array,
    split: _propTypes2.default.bool,
    caret: _propTypes2.default.bool,
    right: _propTypes2.default.bool,
    up: _propTypes2.default.bool,
    toggle: _propTypes2.default.bool,
    iconName: _propTypes2.default.string
};
Dropdown.defaultProps = {
    type: 'default',
    size: 'md',
    split: false,
    caret: true,
    right: false,
    up: false,
    toggle: false,
    toggleStatus: false
};
exports.default = (0, _helpers.composeTheme)(Dropdown);
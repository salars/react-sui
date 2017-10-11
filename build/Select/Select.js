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

var Select = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(Select, _Component);

    function Select() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, Select);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Select.__proto__ || Object.getPrototypeOf(Select)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            valueMap: {},
            showDropdown: false
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Select, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            document.body.addEventListener('click', this.bodyClickEventHandler);
            var _props = this.props,
                name = _props.name,
                config = _props.config,
                change = _props.change,
                value = _props.value;

            var valueMap1 = {};
            if (config && config.options) {
                config.options.forEach(function (item) {
                    valueMap1[item.value] = item.label;
                });
                this.setState({ valueMap: valueMap1 });
            }
            var _value = value;
            if (this.isEmpty(value) && config.options.length) {
                _value = config.options[0].value;
            }
            if (!config || !config.placeholder) {
                change(name, _value);
            }
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            if (nextProps.config != this.props.config) {
                var _props2 = this.props,
                    name = _props2.name,
                    config = _props2.config,
                    change = _props2.change,
                    value = _props2.value;

                var valueMap1 = {};
                if (config && config.options) {
                    config.options.forEach(function (item) {
                        valueMap1[item.value] = item.label;
                    });
                    this.setState({ valueMap: valueMap1 });
                    if (config.promiseValue) {
                        if ((typeof value === "undefined" || value === "" || valueMap1[value] === undefined) && config.options.length) {
                            var val = config.options[0].value;
                            change(name, val);
                        }
                    }
                }
            }
        }
    }, {
        key: 'onSelect',
        value: function onSelect(val) {
            var _props3 = this.props,
                multiple = _props3.multiple,
                value = _props3.value,
                name = _props3.name,
                change = _props3.change;

            if (!multiple) {
                change(name, val);
                return;
            }
            var newValue = value;
            if (!(newValue instanceof Array)) {
                newValue = [];
            }
            newValue.push(val);
            change(name, newValue);
        }
    }, {
        key: 'remove',
        value: function remove(v) {
            var _props4 = this.props,
                multiple = _props4.multiple,
                value = _props4.value,
                name = _props4.name,
                change = _props4.change;

            if (multiple && value instanceof Array) {
                var newValue = value.filter(function (item) {
                    return item !== v;
                });
                change(name, newValue);
            }
        }
    }, {
        key: 'bodyClickEventHandler',
        value: function bodyClickEventHandler(e) {
            if (e.path.includes(this.refs.select)) {
                return;
            }
            this.setState({ showDropdown: false });
        }
    }, {
        key: 'isEmpty',
        value: function isEmpty(val) {
            return val === "" || val === null || val === undefined;
        }
    }, {
        key: 'componentDidMount',
        value: function componentDidMount() {
            document.body.addEventListener('click', this.bodyClickEventHandler);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            document.body.removeEventListener('click', this.bodyClickEventHandler);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var _props5 = this.props,
                config = _props5.config,
                value = _props5.value,
                multiple = _props5.multiple;
            var _state = this.state,
                valueMap = _state.valueMap,
                showDropdown = _state.showDropdown;

            var _ref2 = config || {},
                placeholder = _ref2.placeholder,
                options = _ref2.options;

            var newOptions = options || [];
            if (multiple) {
                newOptions = options.filter(function (item) {
                    if (value && value instanceof Array) {
                        return !value.includes("" + item.value);
                    }
                    return true;
                });
            }
            return _react2.default.createElement(
                'div',
                { ref: 'select', className: 'form-control select ' + (showDropdown ? "open" : ''), onClick: function onClick() {
                        return _this2.setState({ showDropdown: !showDropdown });
                    } },
                _react2.default.createElement(
                    'div',
                    { className: 'dropdown-toggle' },
                    this.isEmpty(value) || value instanceof Array && value.length === 0 ? _react2.default.createElement(
                        'span',
                        { className: 'placeholder' },
                        placeholder
                    ) : multiple ? _react2.default.createElement(
                        'div',
                        { 'class': 'tags-container' },
                        value.map(function (item, i) {
                            return _react2.default.createElement(
                                'span',
                                { className: 'select-tags', key: i },
                                valueMap["" + item],
                                _react2.default.createElement('i', { 'class': 'glyphicon glyphicon-remove',
                                    'on-click': function onClick(e) {
                                        e.preventDefault();
                                        e.stopPropagation();
                                        _this2.remove(item);
                                    }
                                })
                            );
                        })
                    ) : valueMap["" + value],
                    _react2.default.createElement('span', { className: 'caret' })
                ),
                showDropdown ? _react2.default.createElement(
                    'ul',
                    { className: 'dropdown-menu' },
                    placeholder && !multiple ? _react2.default.createElement(
                        'li',
                        { onClick: function onClick(_) {
                                _this2.onSelect("");
                            } },
                        placeholder
                    ) : null,
                    newOptions.map(function (option, i) {
                        return _react2.default.createElement(
                            'li',
                            { onClick: function onClick(_) {
                                    _this2.onSelect(option.value);
                                }, key: i },
                            option.label
                        );
                    })
                ) : null
            );
        }
    }]);

    return Select;
}(_react.Component)) || _class;

Select.props = {
    name: _propTypes2.default.string,
    change: _propTypes2.default.func,
    value: _propTypes2.default.string,
    config: _propTypes2.default.string,
    multiple: _propTypes2.default.bool,
    promiseValue: _propTypes2.default.bool
};
exports.default = (0, _helpers.composeTheme)(Select);
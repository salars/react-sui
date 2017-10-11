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

var TagSelect = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(TagSelect, _Component);

    function TagSelect() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, TagSelect);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = TagSelect.__proto__ || Object.getPrototypeOf(TagSelect)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            selected: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(TagSelect, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            if (this.props.value) {
                this.setState({ selected: this.props.value.split(',') });
            }
        }
    }, {
        key: 'toggleStatus',
        value: function toggleStatus(val) {
            var selected = this.state.selected;
            var _props = this.props,
                change = _props.change,
                name = _props.name;

            var l = selected.length;
            for (var i = 0; i < selected.length; i++) {
                if (selected[i] == val) {
                    selected.splice(i, 1);
                }
            }
            if (l == selected.length) {
                selected.push(val);
            }
            this.setState({ selected: selected });
            change && change(name, selected.join(','));
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(nextProps) {
            var value = this.props.value;

            if (nextProps.value) {
                this.setState({ selected: value.split(',') });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var options = this.props.options;
            var selected = this.state.selected;

            return _react2.default.createElement(
                'div',
                { className: 'tag-select' },
                options.length && options.map(function (item, i) {
                    return _react2.default.createElement(
                        'span',
                        { className: 'tag-item' + (selected.includes(item.value) ? ' checked' : ''), onClick: function onClick() {
                                _this2.toggleStatus(item.value);
                            }, key: i },
                        item.label
                    );
                })
            );
        }
    }]);

    return TagSelect;
}(_react.Component)) || _class;

TagSelect.props = {
    name: _propTypes2.default.string,
    value: _propTypes2.default.string,
    change: _propTypes2.default.func,
    options: _propTypes2.default.array
};
exports.default = (0, _helpers.composeTheme)(TagSelect);
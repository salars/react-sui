'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PAGE_LEN = 5;

var Pagination = function (_Component) {
    _inherits(Pagination, _Component);

    function Pagination() {
        _classCallCheck(this, Pagination);

        return _possibleConstructorReturn(this, (Pagination.__proto__ || Object.getPrototypeOf(Pagination)).apply(this, arguments));
    }

    _createClass(Pagination, [{
        key: 'last',
        value: function last() {
            var _props = this.props,
                total = _props.total,
                pageSize = _props.pageSize;

            var last = Math.ceil(total / pageSize);
            if (last < 1) {
                last = 1;
            }
            return last;
        }
    }, {
        key: 'pages',
        value: function pages() {
            var _props2 = this.props,
                current = _props2.current,
                total = _props2.total,
                pageSize = _props2.pageSize;

            var max = Math.ceil(total / pageSize);
            if (max < 1) {
                max = 1;
            }
            var edge = Math.ceil(PAGE_LEN / 2);
            var pages = [];
            if (max <= PAGE_LEN || current <= edge) {
                var end = max > PAGE_LEN ? PAGE_LEN : max;
                for (var i = 0; i < end; i++) {
                    pages.push(i + 1);
                }
            } else {
                if (current > max - edge) {
                    for (var _i = 0; _i < PAGE_LEN; _i++) {
                        pages.unshift(max - _i);
                    }
                } else {
                    for (var _i2 = 0; _i2 < PAGE_LEN; _i2++) {
                        pages.push(current + (_i2 - edge + 1));
                    }
                }
            }
            return pages;
        }
    }, {
        key: 'render',
        value: function render() {
            var _props3 = this.props,
                total = _props3.total,
                current = _props3.current,
                pageSize = _props3.pageSize,
                change = _props3.change,
                previousText = _props3.previousText,
                nextText = _props3.nextText,
                type = _props3.type,
                goFirstText = _props3.goFirstText,
                goLastText = _props3.goLastText;

            var last = this.last();
            var pages = this.pages();
            return _react2.default.createElement(
                'ul',
                { className: 'pagination pagination-' + type },
                _react2.default.createElement(
                    'li',
                    {
                        className: current === 1 ? " disabled" : "",
                        onClick: function onClick(_) {
                            if (current !== 1) {
                                change(1);
                            }
                        } },
                    _react2.default.createElement(
                        'a',
                        null,
                        goFirstText
                    )
                ),
                _react2.default.createElement(
                    'li',
                    {
                        className: current === 1 ? " disabled" : "",
                        onClick: function onClick(_) {
                            if (current !== 1) {
                                change(current - 1);
                            }
                        } },
                    _react2.default.createElement(
                        'a',
                        null,
                        previousText
                    )
                ),
                pages.map(function (item, i) {
                    return _react2.default.createElement(
                        'li',
                        { key: i, className: current === item ? " active" : "",
                            onClick: function onClick(_) {
                                change(item);
                            } },
                        _react2.default.createElement(
                            'a',
                            null,
                            item
                        )
                    );
                }),
                _react2.default.createElement(
                    'li',
                    {
                        className: current === last ? " disabled" : "",
                        onClick: function onClick(_) {
                            if (current !== last) {
                                change(current + 1);
                            }
                        }
                    },
                    _react2.default.createElement(
                        'a',
                        null,
                        nextText
                    )
                ),
                _react2.default.createElement(
                    'li',
                    {
                        className: current === last ? " disabled" : "",
                        onClick: function onClick() {
                            if (current !== last) {
                                change(last);
                            }
                        }
                    },
                    _react2.default.createElement(
                        'a',
                        null,
                        goLastText
                    )
                )
            );
        }
    }]);

    return Pagination;
}(_react.Component);

Pagination.props = {
    total: _propTypes2.default.number,
    current: _propTypes2.default.number,
    pageSize: _propTypes2.default.number,
    change: _propTypes2.default.func,
    previousText: _propTypes2.default.string,
    nextText: _propTypes2.default.string,
    goFirstText: _propTypes2.default.string,
    goLastText: _propTypes2.default.string,
    type: _propTypes2.default.string
};
Pagination.defaultProps = {
    total: 0,
    current: 1,
    pageSize: 10,
    previousText: "<",
    nextText: ">",
    goFirstText: "|<",
    goLastText: ">|"
};
exports.default = (0, _helpers.composeTheme)(Pagination);
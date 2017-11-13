'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

var _coreDecorators = require('core-decorators');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var BreadCrumb = function (_Component) {
    _inherits(BreadCrumb, _Component);

    function BreadCrumb() {
        _classCallCheck(this, BreadCrumb);

        return _possibleConstructorReturn(this, (BreadCrumb.__proto__ || Object.getPrototypeOf(BreadCrumb)).apply(this, arguments));
    }

    _createClass(BreadCrumb, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                t = _props.t,
                pathInfo = _props.pathInfo;

            return pathInfo instanceof Array && pathInfo.length > 0 ? _react2.default.createElement(
                'ul',
                { className: 'breadcrumb', style: {
                        backgroundColor: 'white'
                    } },
                pathInfo.map(function (item, i) {
                    return _react2.default.createElement(
                        'li',
                        { className: 'breadcrumb-item ' + (item.url ? "" : ' active'), key: i, onClick: function onClick() {
                                window.location.href = item.url;
                            } },
                        item.url ? _react2.default.createElement(
                            'span',
                            { style: {
                                    color: t.BREAD_COLOR,
                                    cursor: 'pointer'
                                } },
                            item.content
                        ) : _react2.default.createElement(
                            'span',
                            null,
                            item.content
                        )
                    );
                })
            ) : null;
        }
    }]);

    return BreadCrumb;
}(_react.Component);

BreadCrumb.props = {
    pathInfo: _propTypes2.default.array
};
exports.default = (0, _helpers.composeTheme)(BreadCrumb);
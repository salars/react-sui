'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _helpers = require('../helpers');

var _coreDecorators = require('core-decorators');

require('./style.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataTableContainer = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(DataTableContainer, _Component);

    function DataTableContainer() {
        _classCallCheck(this, DataTableContainer);

        return _possibleConstructorReturn(this, (DataTableContainer.__proto__ || Object.getPrototypeOf(DataTableContainer)).apply(this, arguments));
    }

    _createClass(DataTableContainer, [{
        key: 'globalEventHandler',
        value: function globalEventHandler(e) {
            var node = this.refs.simpleInfoHandler;
            if (!e.path.includes(node)) {
                node.style.display = 'none';
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
            var t = this.props.t;

            return _react2.default.createElement(
                'div',
                { className: 'data-table-container', style: { position: 'relative' } },
                this.props.children,
                _react2.default.createElement(
                    'div',
                    { className: 'simple-info-container', ref: 'simpleInfoHandler', style: {
                            position: 'absolute',
                            background: t.PRIMARY_COLOR,
                            color: t.WHITE,
                            borderRadius: '.15rem',
                            padding: '.5rem',
                            maxWidth: '20rem',
                            wordBreak: 'break-all'
                        } },
                    ' '
                )
            );
        }
    }]);

    return DataTableContainer;
}(_react.Component)) || _class;

exports.default = (0, _helpers.composeTheme)(DataTableContainer);
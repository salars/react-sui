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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(FileUpload, _Component);

    function FileUpload() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, FileUpload);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            path: "",
            fileType: "",
            fileSize: "",
            file: ""
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(FileUpload, [{
        key: 'isImgFile',
        value: function isImgFile(typefile) {
            var bol = typefile.indexOf("jpeg") || typefile.indexOf("jpg") || typefile.indexOf("png");
            return bol > -1;
        }
    }, {
        key: 'handleDelete',
        value: function handleDelete(e) {
            this.setState({ path: "",
                file: "",
                fileType: "" });
        }
    }, {
        key: 'handleChange',
        value: function handleChange(e) {
            var _props = this.props,
                change = _props.change,
                fileType = _props.fileType;

            e.preventDefault();
            var fileDetail = e.target.files;
            if (!fileDetail.length) {
                return;
            }
            var status = this.isImgFile(fileDetail[0].type);
            if (!status && fileType == "image" || status && fileType == "file") {
                console.log("类型要求不符");
                return;
            }
            this.setState({ path: e.target.value, file: window.URL.createObjectURL(fileDetail[0]), fileType: fileDetail[0].type });
            change("file", fileDetail[0]);
        }
    }, {
        key: 'render',
        value: function render() {
            var _props2 = this.props,
                t = _props2.t,
                text = _props2.text,
                fileType = _props2.fileType,
                requirePath = _props2.requirePath;

            return _react2.default.createElement(
                'div',
                { className: 'file-block' },
                _react2.default.createElement(
                    'div',
                    { className: 'file-left-con' },
                    fileType == "image" && this.state.file ? _react2.default.createElement(
                        'div',
                        { className: 'file-img' },
                        _react2.default.createElement('img', { width: "100%", height: "100%", src: this.state.file, alt: '' }),
                        _react2.default.createElement(
                            'span',
                            { className: 'file-actions' },
                            _react2.default.createElement(
                                'span',
                                { className: 'file--dele', onClick: this.handleDelete },
                                _react2.default.createElement('i', { className: 'fa fa-trash-o fa-fw fa-6', 'aria-hidden': 'true' })
                            )
                        )
                    ) : _react2.default.createElement(
                        'div',
                        { className: 'file-box' },
                        _react2.default.createElement(
                            'div',
                            { className: 'file-inner-icon' },
                            _react2.default.createElement('i', { className: 'fa fa-cloud-upload fa-6 file-upload', 'aria-hidden': 'true' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'file-box-content' },
                            _react2.default.createElement('input', { type: 'file',
                                className: 'file-input',
                                id: 'inputFile',
                                onChange: this.handleChange })
                        )
                    )
                ),
                requirePath ? _react2.default.createElement(
                    'div',
                    { className: 'file-left-con file-path' },
                    _react2.default.createElement(
                        'div',
                        null,
                        this.state.path
                    )
                ) : null
            );
        }
    }]);

    return FileUpload;
}(_react.Component)) || _class;

FileUpload.Props = {
    text: _propTypes2.default.string,
    fileType: _propTypes2.default.string,
    requirePath: _propTypes2.default.bool
};
exports.default = (0, _helpers.composeTheme)(FileUpload);
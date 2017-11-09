'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _helpers = require('../helpers');

var _Pagination = require('react-sui/Pagination');

var _Pagination2 = _interopRequireDefault(_Pagination);

var _CheckBox = require('react-sui/CheckBox');

var _CheckBox2 = _interopRequireDefault(_CheckBox);

var _Select = require('react-sui/Select');

var _Select2 = _interopRequireDefault(_Select);

var _Input = require('react-sui/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Dropdown = require('react-sui/Dropdown');

var _Dropdown2 = _interopRequireDefault(_Dropdown);

var _config = require('./config');

var _config2 = _interopRequireDefault(_config);

var _coreDecorators = require('core-decorators');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DataTable = (0, _coreDecorators.autobind)(_class = function (_Component) {
    _inherits(DataTable, _Component);

    function DataTable() {
        var _ref;

        var _temp, _this, _ret;

        _classCallCheck(this, DataTable);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DataTable.__proto__ || Object.getPrototypeOf(DataTable)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
            data: [],
            current: 1,
            total: 0,
            config: {},
            selectArr: [],
            checkAll: false, //所有数据全选
            selectColumnOptions: []
        }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(DataTable, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var _this2 = this;

            var mergeConfig = Object.assign({}, _config2.default, this.props.config);
            this.setState({ config: mergeConfig }, function () {
                _this2.getData(1, _this2.state.config.pageLength);
            });

            if (mergeConfig.selectColumn) {
                var columns = this.props.columns;

                var selColOptArr = [];
                for (var i = 0; i < columns.length; i++) {
                    selColOptArr.push({
                        label: columns[i].label,
                        value: columns[i].value,
                        fnClick: function fnClick(label, val, flag) {
                            _this2.selectColumnChange(label, val, flag);
                        }
                    });
                }
                this.setState({ selectColumnOptions: selColOptArr });
            }
        }
    }, {
        key: 'getData',
        value: function getData(pageNum, pageSize) {
            //根据url获取数据......
            if (this.props.url) {
                var _state = this.state,
                    config = _state.config,
                    current = _state.current;
                var columns = this.props.columns;

                var param = {};
                if (config.paging) {
                    param = Object.assign({}, { page: current, rows: config.pageLength });
                }
                for (var i = 0; i < columns.length; i++) {
                    if (columns[i].sort) {
                        if (columns[i].asc) {
                            param = Object.assign({}, param, { dir: 'asc', col: columns[i].value });
                        } else if (columns[i].desc) {
                            param = Object.assign({}, param, { dir: 'desc', col: columns[i].value });
                        }
                    }
                }
                console.log(param);

                //模拟数据
                var data = [];
                var total = 0;
                /*for (let i = 0; i < pageSize; i++) {
                    const sum = (pageNum - 1) * pageSize + i + 1;
                    if (sum <= total) {
                        data.push({id: sum, name: 'test' + sum, nickName: 'nick' + sum, tel: '12341341234'});
                    }
                }*/
                var checkAll = this.state.checkAll;


                var arr = [];
                if (checkAll) {
                    for (var _i = 0; _i < data.length; _i++) {
                        arr.push(data[_i].id);
                    }
                }
                this.setState({ data: data, total: total, selectArr: arr });
            }
        }
    }, {
        key: 'pageChange',
        value: function pageChange(index) {
            var _this3 = this;

            //选择页
            this.setState({ current: index }, function () {
                _this3.getData(index, _this3.state.config.pageLength);
            });
        }
    }, {
        key: 'pageLengthChange',
        value: function pageLengthChange(value) {
            var _this4 = this;

            var mergeConfig = Object.assign({}, this.state.config, { pageLength: value });
            this.setState({ config: mergeConfig, current: 1 }, function () {
                _this4.getData(_this4.state.current, value);
            });
        }
    }, {
        key: 'selectAll',
        value: function selectAll(val) {
            //全选变化
            var data = this.state.data;

            var arr = [];
            if (val) {
                for (var i = 0; i < data.length; i++) {
                    arr.push(data[i].id);
                }
            } else {
                this.setState({ checkAll: false });
            }
            this.setState({ selectArr: arr });
        }
    }, {
        key: 'selectTrChange',
        value: function selectTrChange(id, val) {
            //tbody内行选择变化
            var arr = this.state.selectArr;
            if (val) {
                arr = [].concat(_toConsumableArray(arr), [id]);
            } else {
                this.setState({ checkAll: false });
                for (var i = 0; i < arr.length; i++) {
                    if (id == arr[i]) {
                        arr.splice(i, 1);
                    }
                }
            }
            this.setState({ selectArr: arr });
        }
    }, {
        key: 'checkAllChange',
        value: function checkAllChange(val) {
            //全选按钮状态改变
            this.setState({ checkAll: val });
            var arr = [];
            var data = this.state.data;

            if (val) {
                for (var i = 0; i < data.length; i++) {
                    arr.push(data[i].id);
                }
            }
            this.setState({ selectArr: arr });
        }
    }, {
        key: 'thClick',
        value: function thClick(item) {
            //排序点击事件
            if (item.sort) {
                if (!item.asc && !item.desc) {
                    item.asc = !item.asc;
                } else {
                    item.asc = !item.asc;
                    item.desc = !item.desc;
                }
                var arr = this.props.columns;
                for (var i = 0; i < arr.length; i++) {
                    if (arr[i].sort) {
                        if (arr[i].value == item.value) {
                            arr.splice(i, 1, item);
                        } else {
                            arr[i].asc = false;
                            arr[i].desc = false;
                        }
                    }
                }
                this.getData(1, this.state.config.pageLength);
            }
        }
    }, {
        key: 'selectColumnChange',
        value: function selectColumnChange(label, val, flag) {
            var arr = this.props.columns;
            for (var i = 0; i < arr.length; i++) {
                if (arr[i].value == val && arr[i].label == label) {
                    if (flag) {
                        arr[i].hide = true;
                    } else {
                        arr[i].hide = false;
                    }
                }
            }
            this.setState({});
        }
    }, {
        key: 'showDetailInfo',
        value: function showDetailInfo(e, val) {
            e.stopPropagation();
            var container = this.refs.dataTable.parentNode.getElementsByClassName('simple-info-container')[0];
            var _e$target = e.target,
                offsetLeft = _e$target.offsetLeft,
                offsetTop = _e$target.offsetTop;

            container.style.display = 'block';
            container.innerHTML = val;
            container.style.left = offsetLeft + 'px';
            container.style.top = offsetTop + e.target.parentNode.parentNode.parentNode.offsetTop - container.offsetHeight + 5 + 'px';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this5 = this;

            var _props = this.props,
                t = _props.t,
                columns = _props.columns,
                striped = _props.striped,
                bordered = _props.bordered,
                hover = _props.hover,
                select = _props.select,
                buttons = _props.buttons,
                selectAllButton = _props.selectAllButton;
            var _state2 = this.state,
                data = _state2.data,
                current = _state2.current,
                total = _state2.total,
                config = _state2.config,
                selectArr = _state2.selectArr,
                checkAll = _state2.checkAll,
                selectColumnOptions = _state2.selectColumnOptions;

            var info = config.language.info.replace('_START_', (current - 1) * config.pageLength).replace('_END_', (current - 1) * config.pageLength + data.length).replace('_TOTAL_', total);

            var pageLengthConfig = []; //页长
            for (var i = 0; i < config.lengthMenu.length; i++) {
                pageLengthConfig.push({ label: config.lengthMenu[i], value: config.lengthMenu[i] });
            }
            return _react2.default.createElement(
                'div',
                { className: 'data-table', ref: 'dataTable' },
                _react2.default.createElement(
                    'div',
                    { style: { marginBottom: t.MARGIN_MEDIUM }, className: 'buttons' },
                    selectAllButton ? _react2.default.createElement(_CheckBox2.default, { text: '\u5168\u9009', checked: checkAll, fnClick: function fnClick(name, value) {
                            _this5.checkAllChange(value);
                        } }) : null,
                    buttons && buttons.map(function (item, i) {
                        return _react2.default.createElement(
                            'span',
                            { key: i,
                                className: item.className || '',
                                style: {
                                    display: item.className != 'select-none-hide' || selectArr.length != 0 ? 'inline-block' : 'none'
                                },
                                onClick: function onClick() {
                                    item.callback(checkAll ? { checkAll: true } : selectArr);
                                }
                            },
                            item.iconName ? _react2.default.createElement('i', { className: "fa fa-" + item.iconName, 'aria-hidden': 'true', style: { marginRight: '.3rem' } }) : null,
                            item.label
                        );
                    }),
                    config.selectColumn ? _react2.default.createElement(_Dropdown2.default, { label: '\u9009\u62E9\u5217', iconName: 'list', caret: false, toggle: true, options: selectColumnOptions }) : null
                ),
                _react2.default.createElement(
                    'div',
                    { style: config.scrollX ? { overflowX: 'auto' } : {} },
                    _react2.default.createElement(
                        'table',
                        {
                            className: 'table ' + (striped ? 'table-striped' : '') + ' ' + (bordered ? 'table-bordered' : '') + ' ' + (hover ? 'table-hover' : '') },
                        _react2.default.createElement(
                            'thead',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                select ? _react2.default.createElement(
                                    'th',
                                    { style: { width: t.TABLE_SELECT_WIDTH } },
                                    _react2.default.createElement(_CheckBox2.default, {
                                        checked: selectArr.length == data.length && data.length > 0 || checkAll,
                                        fnClick: function fnClick(name, value) {
                                            return _this5.selectAll(value);
                                        } })
                                ) : null,
                                columns.map(function (item, i) {
                                    var styleObj = {};
                                    if (item.simpleInfo) {
                                        styleObj = { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '10rem' };
                                    }
                                    styleObj = item.sort ? _extends({}, styleObj, { paddingRight: '25px', position: 'relative' }) : styleObj;
                                    if (!item.hide) {
                                        return _react2.default.createElement(
                                            'th',
                                            { key: i,
                                                onClick: function onClick() {
                                                    return _this5.thClick(item);
                                                },
                                                style: styleObj
                                            },
                                            item.label,
                                            item.sort ? _react2.default.createElement(
                                                'div',
                                                { style: { position: 'absolute', right: '10px', top: '4px' } },
                                                _react2.default.createElement(
                                                    'i',
                                                    { className: 'fa fa-caret-up', 'aria-hidden': 'true', style: { display: 'block', fontSize: '18px', color: item.asc ? t.PRIMARY_COLOR : t.GRAY_BOLD } },
                                                    ' '
                                                ),
                                                _react2.default.createElement(
                                                    'i',
                                                    { className: 'fa fa-caret-down', 'aria-hidden': 'true', style: { display: 'block', fontSize: '18px', color: item.desc ? t.PRIMARY_COLOR : t.GRAY_BOLD, transform: 'translate(0,-7px)' } },
                                                    ' '
                                                )
                                            ) : null
                                        );
                                    }
                                })
                            )
                        ),
                        data.length > 0 ? _react2.default.createElement(
                            'tbody',
                            null,
                            data.map(function (item, i) {
                                return _react2.default.createElement(
                                    'tr',
                                    { key: i, onClick: function onClick() {
                                            _this5.selectTrChange(item.id, !(selectArr.includes(item.id) || checkAll));
                                        } },
                                    select ? _react2.default.createElement(
                                        'td',
                                        null,
                                        _react2.default.createElement(_CheckBox2.default, { name: item.id,
                                            checked: selectArr.includes(item.id) || checkAll })
                                    ) : null,
                                    columns.map(function (val, idx) {
                                        if (!val.hide) {
                                            return _react2.default.createElement(
                                                'td',
                                                { key: idx,
                                                    className: val.simpleInfo ? 'simple-info-td' : '',
                                                    style: val.simpleInfo ? { whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '10rem', color: t.PRIMARY_COLOR, cursor: 'pointer' } : {},
                                                    onClick: function onClick(event) {
                                                        if (val.simpleInfo) {
                                                            _this5.showDetailInfo(event, val.render ? val.render(item[val.value], item) : item[val.value]);
                                                        }
                                                    }
                                                },
                                                val.render ? val.render(item[val.value], item) : item[val.value]
                                            );
                                        }
                                    })
                                );
                            })
                        ) : _react2.default.createElement(
                            'tbody',
                            null,
                            _react2.default.createElement(
                                'tr',
                                null,
                                _react2.default.createElement(
                                    'td',
                                    { colSpan: columns.length + (select ? 1 : 0), style: { height: '18rem' }, className: 'no-result-img' },
                                    ' '
                                )
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    null,
                    config.info ? _react2.default.createElement(
                        'div',
                        { style: { display: 'inline-block', margin: '20px 0', padding: '6px 0' } },
                        _react2.default.createElement(
                            'span',
                            {
                                style: { marginRight: t.PADDING_SM_HORIZONTAL } },
                            data.length != 0 ? info : config.language.infoEmpty
                        ),
                        config.paging ? _react2.default.createElement(
                            'div',
                            { style: { display: 'inline-block', width: '5rem' } },
                            _react2.default.createElement(
                                _Select2.default,
                                {
                                    value: config.pageLength,
                                    config: {
                                        options: pageLengthConfig
                                    },
                                    change: function change(name, value) {
                                        return _this5.pageLengthChange(value);
                                    }
                                },
                                config.lengthMenu.map(function (item, i) {
                                    return _react2.default.createElement(
                                        'option',
                                        { key: i, value: item },
                                        item
                                    );
                                })
                            )
                        ) : null
                    ) : null,
                    config.paging ? _react2.default.createElement(
                        'div',
                        { style: { display: 'inline-block', float: 'right' } },
                        _react2.default.createElement(_Pagination2.default, {
                            total: total,
                            previousText: config.paginate.previous,
                            nextText: config.paginate.next,
                            goFirstText: config.paginate.first,
                            goLastText: config.paginate.last,
                            current: current,
                            pageSize: config.pageLength,
                            change: function change(index) {
                                _this5.pageChange(index);
                            }
                        })
                    ) : null
                )
            );
        }
    }]);

    return DataTable;
}(_react.Component)) || _class;

DataTable.props = {
    columns: _propTypes2.default.array,
    // data: PropTypes.array,
    url: _propTypes2.default.string,
    striped: _propTypes2.default.bool,
    bordered: _propTypes2.default.bool,
    hover: _propTypes2.default.bool,
    select: _propTypes2.default.bool,
    config: _propTypes2.default.object,
    buttons: _propTypes2.default.array,
    selectAllButton: _propTypes2.default.bool
};
DataTable.defaultProps = {
    columns: [],
    url: '',
    striped: true,
    bordered: true,
    hover: true,
    select: false,
    selectAllButton: false
};
exports.default = (0, _helpers.composeTheme)(DataTable);
import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {composeTheme, getColorByType} from '../helpers';
import Pagination from 'react-sui/Pagination';
import CheckBox from 'react-sui/CheckBox';
import Select from 'react-sui/Select';
import Input from 'react-sui/Input';
import Dropdown from 'react-sui/Dropdown';
import defaultConfig from './config';
import {autobind} from 'core-decorators';
@autobind
class DataTable extends Component {
    static props = {
        columns: PropTypes.array,
        // data: PropTypes.array,
        url: PropTypes.string,
        striped: PropTypes.bool,
        bordered: PropTypes.bool,
        hover: PropTypes.bool,
        select: PropTypes.bool,
        config: PropTypes.object,
        buttons: PropTypes.array,
        selectAllButton: PropTypes.bool,
    };
    static defaultProps = {
        columns: [],
        url: '',
        striped: true,
        bordered: true,
        hover: true,
        select: false,
        selectAllButton: false,
    };
    state = {
        data: [],
        current: 1,
        total: 0,
        config: {},
        selectArr: [],
        checkAll: false,//所有数据全选
        selectColumnOptions: [],
    };

    componentWillMount() {
        const mergeConfig = Object.assign({}, defaultConfig, this.props.config);
        this.setState({config: mergeConfig}, () => {
            this.getData(1, this.state.config.pageLength);
        });

        if (mergeConfig.selectColumn) {
            const {columns} = this.props;
            let selColOptArr = [];
            for (let i = 0; i < columns.length; i++) {
                selColOptArr.push({
                    label: columns[i].label,
                    value: columns[i].value,
                    fnClick: (label, val, flag) => {
                        this.selectColumnChange(label, val, flag)
                    }
                })
            }
            this.setState({selectColumnOptions: selColOptArr});
        }
    }

    componentWillReceiveProps(nextState,nextProps){
            // url data
    }

    getData(pageNum, pageSize) {
        //根据url获取数据......
        if (this.props.url) {
            const {config, current} = this.state;
            const {columns} = this.props;
            let param = {};
            if (config.paging) {
                param = Object.assign({}, {page: current, rows: config.pageLength});
            }
            for (let i = 0; i < columns.length; i++) {
                if (columns[i].sort) {
                    if (columns[i].asc) {
                        param = Object.assign({}, param, {dir: 'asc', col: columns[i].value});
                    } else if (columns[i].desc) {
                        param = Object.assign({}, param, {dir: 'desc', col: columns[i].value});
                    }
                }
            }
            console.log(param);

            //模拟数据
            let data = [];
            const total = 0;
            /*for (let i = 0; i < pageSize; i++) {
                const sum = (pageNum - 1) * pageSize + i + 1;
                if (sum <= total) {
                    data.push({id: sum, name: 'test' + sum, nickName: 'nick' + sum, tel: '12341341234'});
                }
            }*/
            const {checkAll} = this.state;

            let arr = [];
            if (checkAll) {
                for (let i = 0; i < data.length; i++) {
                    arr.push(data[i].id);
                }
            }
            this.setState({data: data, total: total, selectArr: arr});
        }
    }

    pageChange(index) {//选择页
        this.setState({current: index}, () => {
            this.getData(index, this.state.config.pageLength)
        });
    }

    pageLengthChange(value) {
        const mergeConfig = Object.assign({}, this.state.config, {pageLength: value});
        this.setState({config: mergeConfig, current: 1}, () => {
            this.getData(this.state.current, value);
        });
    }

    selectAll(val) {//全选变化
        const {data} = this.state;
        let arr = [];
        if (val) {
            for (let i = 0; i < data.length; i++) {
                arr.push(data[i].id);
            }
        } else {
            this.setState({checkAll: false});
        }
        this.setState({selectArr: arr});
    }

    selectTrChange(id, val) {//tbody内行选择变化
        let arr = this.state.selectArr;
        if (val) {
            arr = [...arr, id];
        } else {
            this.setState({checkAll: false});
            for (let i = 0; i < arr.length; i++) {
                if (id == arr[i]) {
                    arr.splice(i, 1);
                }
            }
        }
        this.setState({selectArr: arr});
    }

    checkAllChange(val) {//全选按钮状态改变
        this.setState({checkAll: val});
        let arr = [];
        const {data} = this.state;
        if (val) {
            for (let i = 0; i < data.length; i++) {
                arr.push(data[i].id);
            }
        }
        this.setState({selectArr: arr});
    }

    thClick(item) {//排序点击事件
        if (item.sort) {
            if (!item.asc && !item.desc) {
                item.asc = !item.asc;
            } else {
                item.asc = !item.asc;
                item.desc = !item.desc;
            }
            let arr = this.props.columns;
            for (let i = 0; i < arr.length; i++) {
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

    selectColumnChange(label, val, flag) {
        let arr = this.props.columns;
        for (let i = 0; i < arr.length; i++) {
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

    showDetailInfo(e,val){
        e.stopPropagation();
        let container = this.refs.dataTable.parentNode.getElementsByClassName('simple-info-container')[0];
        const { offsetLeft, offsetTop } = e.target;
        container.style.display = 'block';
        container.innerHTML = val;
        container.style.left = offsetLeft + 'px';
        container.style.top = offsetTop + e.target.parentNode.parentNode.parentNode.offsetTop - container.offsetHeight + 5 + 'px';
    }
    render() {
        const {t, columns, striped, bordered, hover, select, buttons, selectAllButton} = this.props;
        const {data, current, total, config, selectArr, checkAll, selectColumnOptions} = this.state;
        const info = config.language.info
            .replace('_START_', (current - 1) * config.pageLength)
            .replace('_END_', (current - 1) * config.pageLength + data.length)
            .replace('_TOTAL_', total);

        let pageLengthConfig = [];//页长
        for (let i = 0; i < config.lengthMenu.length; i++) {
            pageLengthConfig.push({label: config.lengthMenu[i], value: config.lengthMenu[i]});
        }
        return (
            <div className="data-table" ref="dataTable">
                <div style={{marginBottom: t.MARGIN_MEDIUM}} className="buttons">
                    {
                        selectAllButton ?
                            <CheckBox text="全选" checked={ checkAll } fnClick={ (name, value) => {
                                this.checkAllChange(value)
                            } }/>
                            : null
                    }
                    {
                        buttons && buttons.map((item, i) => {
                            return <span key={i}
                                         className={ item.className || '' }
                                         style={{
                                             display: ( item.className != 'select-none-hide' || selectArr.length != 0 ) ? 'inline-block' : 'none'
                                         }}
                                         onClick={ () => {
                                             item.callback(checkAll ? {checkAll: true} : selectArr)
                                         } }
                            >
                                { item.iconName ? <i className={"fa fa-"+item.iconName} aria-hidden="true" style={{marginRight:'.3rem'}}></i> : null }
                                {item.label}
                            </span>
                        })
                    }
                    {
                        config.selectColumn ?
                            <Dropdown label="选择列" iconName="list" caret={false} toggle={true} options={ selectColumnOptions }/>
                            : null
                    }
                </div>
                <div style={config.scrollX ? {overflowX:'auto'} : {} }>
                <table
                    className={`table ${striped ? 'table-striped' : ''} ${bordered ? 'table-bordered' : ''} ${hover ? 'table-hover' : ''}`}>
                    <thead>
                    <tr>
                        {
                            select ?
                                <th style={{width: t.TABLE_SELECT_WIDTH}}>
                                    <CheckBox
                                        checked={ (selectArr.length == data.length && data.length > 0) || checkAll }
                                        fnClick={ (name, value) => this.selectAll(value) }/>
                                </th> : null
                        }
                        {
                            columns.map((item, i) => {
                                let styleObj = {};
                                if(item.simpleInfo){
                                    styleObj = {whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'10rem'}
                                }
                                styleObj = item.sort ? {...styleObj,paddingRight: '25px', position: 'relative'} : styleObj;
                                if (!item.hide) {
                                    return <th key={i}
                                               onClick={ () => this.thClick(item) }
                                               style={ styleObj }
                                           >
                                        { item.label }
                                        {
                                            item.sort ?
                                                <div style={{position:'absolute',right:'10px',top:'4px'}}>
                                                    <i className="fa fa-caret-up" aria-hidden="true" style={{display:'block',fontSize:'18px',color:item.asc ? t.PRIMARY_COLOR:t.GRAY_BOLD}}> </i>
                                                    <i className="fa fa-caret-down" aria-hidden="true" style={{display:'block',fontSize:'18px',color:item.desc ? t.PRIMARY_COLOR:t.GRAY_BOLD,transform:'translate(0,-7px)'}}> </i>
                                                </div>
                                                : null
                                        }
                                    </th>
                                }
                            })
                        }
                    </tr>
                    </thead>
                    {
                        data.length > 0 ?
                            <tbody>
                            {
                                data.map((item, i) => {
                                    return <tr key={i} onClick={ () => {
                                        this.selectTrChange(item.id, !(selectArr.includes(item.id) || checkAll))
                                    } }>
                                        {
                                            select ?
                                                <td>
                                                    <CheckBox name={item.id}
                                                              checked={ selectArr.includes(item.id) || checkAll }/>
                                                </td> : null
                                        }
                                        {
                                            columns.map((val, idx) => {
                                                if (!val.hide) {
                                                    return <td key={idx}
                                                               className={ val.simpleInfo ? 'simple-info-td':'' }
                                                               style={ val.simpleInfo ? {whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis',maxWidth:'10rem',color:t.PRIMARY_COLOR,cursor:'pointer'} : {} }
                                                               onClick={
                                                                   (event)=> {
                                                                       if( val.simpleInfo){
                                                                           this.showDetailInfo(event,val.render ? val.render(item[val.value], item) : item[val.value])
                                                                       }
                                                                   }
                                                               }
                                                    >
                                                        { val.render ? val.render(item[val.value], item) : item[val.value] }
                                                    </td>
                                                }
                                            })
                                        }
                                    </tr>
                                })
                            }
                            </tbody>
                            :
                            <tbody>
                            <tr>
                                <td colSpan={ columns.length + (select ? 1 : 0) } style={{height: '18rem'}} className="no-result-img"> </td>
                            </tr>
                            </tbody>
                    }
                </table>
                </div>
                <div>
                    {
                        config.info ?
                            <div style={{display: 'inline-block', margin: '20px 0', padding: '6px 0'}}>
                                <span
                                    style={{marginRight: t.PADDING_SM_HORIZONTAL}}>{ data.length != 0 ? info : config.language.infoEmpty}</span>
                                {
                                    config.paging ?
                                        <div style={{display: 'inline-block', width: '5rem'}}>
                                            <Select
                                                value={ config.pageLength }
                                                config={{
                                                    options: pageLengthConfig,
                                                }}
                                                change={ (name, value) => this.pageLengthChange(value) }
                                            >
                                                {
                                                    config.lengthMenu.map((item, i) => {
                                                        return <option key={i} value={item}>{item}</option>
                                                    })
                                                }
                                            </Select>
                                        </div>
                                        : null
                                }
                            </div>
                            : null
                    }
                    {
                        config.paging ?
                            <div style={{display: 'inline-block', float: 'right'}}>
                                <Pagination
                                    total={ total }
                                    previousText={ config.paginate.previous }
                                    nextText={ config.paginate.next }
                                    goFirstText={ config.paginate.first }
                                    goLastText={ config.paginate.last }
                                    current={ current }
                                    pageSize={ config.pageLength }
                                    change={
                                        (index) => {
                                            this.pageChange(index)
                                        }
                                    }
                                />
                            </div>
                            : null
                    }
                </div>
            </div>
        );
    }
}

export default composeTheme(DataTable);
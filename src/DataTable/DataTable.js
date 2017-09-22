import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
import Pagination from 'react-sui/Pagination';
import defaultConfig from './config';
import { autobind } from 'core-decorators';
import './style.less';
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
        selectAll: false,//当前页全选
        selectArr:[],
        checkAll: false,//所有数据全选
    };
    componentWillMount(){
        const mergeConfig = Object.assign({}, defaultConfig, this.props.config);
        this.setState({config: mergeConfig},()=>{
            this.getData(1,this.state.config.pageLength);
        });
    }
    getData(pageNum,pageSize){
        //根据url获取数据......
        if(this.props.url){
            let data=[];
            const total = 104;
            for(let i=0;i<pageSize;i++){
                const sum = (pageNum-1)*pageSize+i+1;
                if(sum<=total){
                    data.push({ id: sum, name:'test'+sum, nickName: 'nick'+sum, tel: '12341341234' });
                }
            }
            this.setState({data: data,total:total,selectAll:false,selectArr:[]});
        }
    }
    pageChange(index){//选择页
        this.setState({current:index},()=>{this.getData(index,this.state.config.pageLength)});
    }
    pageLengthChange(e){
        const value = e.target.value;
        const mergeConfig = Object.assign({}, this.state.config, {pageLength: value});
        this.setState({config: mergeConfig,current:1},()=>{
            this.getData(this.state.current,value);
        });
    }
    selectAll(e){//全选变化
        const checked = e.target.checked;
        const {data} = this.state;
        let arr = [];
        if(checked){
            for(let i=0;i<data.length;i++){
                this.setAllCheckboxValue(true);
                arr.push(data[i].id);
            }
        }else{
            for(let i=0;i<data.length;i++){
                this.setAllCheckboxValue(false);
            }
        }
        this.setState({selectAll:checked});
        this.updateSelectArr();
    }
    setAllCheckboxValue(val){//全部选中或取消全部选中
        let nodes = document.querySelectorAll('.data-table .table tbody tr');
        for(let i=0;i<nodes.length;i++){
            nodes[i].childNodes[0].childNodes[0].checked = val;
        }
    }
    checkboxChange(e){//tbody内行选择变化
        const checked = e.target.checked;
        if(checked){
            this.setState({selectAll:this.updateSelectArr()});
        }else{
            this.setState({selectAll:checked});
        }
        this.updateSelectArr();
    }
    updateSelectArr(){//更新数组
        const {data} = this.state;
        let arr = [];
        for(let i=0;i<data.length;i++){
            if(document.querySelectorAll('.data-table .table tbody tr')[i].childNodes[0].childNodes[0].checked){
                arr.push(data[i].id);
            }
        }
        this.setState({selectArr:arr});
        if(arr.length==data.length){
            return true;
        }else{
            return false;
        }
    }
    checkAllChange(e){//全选按钮状态改变
        this.setState({checkAll: e.target.checked});
    }
    render(){
        const { t,columns,striped,bordered,hover,select,buttons,selectAllButton } = this.props;
        const { data,current,total,config,selectAll,selectArr,checkAll } = this.state;
        const info = config.language.info
            .replace('_START_',(current-1)*config.pageLength)
            .replace('_END_',(current-1)*config.pageLength+data.length)
            .replace('_TOTAL_',total);
        return (
            <div className="data-table">
                <div style={{marginBottom:t.MARGIN_MEDIUM}} className="buttons">
                    {
                        selectAllButton ?
                            <span className="table-select-all" style={{
                                display:'inline-block',
                                cursor:'pointer',
                                marginRight: t.MARGIN_SMALL,
                                paddingLeft: t.PADDING_LG_VERTICAL,
                                paddingRight: t.PADDING_LG_VERTICAL,
                                height: t.TABLE_BUTTON_HEIGHT,
                                lineHeight: t.TABLE_BUTTON_HEIGHT,
                                borderRadius: '.1rem',
                            }} >
                                <input type="checkbox" checked={ checkAll } id="table-check-all" onChange={ this.checkAllChange }
                                    style={{
                                        cursor: 'pointer',
                                        marginRight: t.MARGIN_SMALL,
                                    }}/>
                                <label htmlFor="table-check-all"style={{
                                    cursor:'pointer',
                                    fontWeight: 'normal',
                                    marginBottom: '0'
                                }}>全选</label>
                            </span>
                            : null
                    }
                    {
                        buttons.map((item,i)=>{
                            return <span key={i}
                                        style={{
                                            display:'inline-block',
                                            cursor:'pointer',
                                            marginRight: t.MARGIN_SMALL,
                                            paddingLeft: t.PADDING_LG_VERTICAL,
                                            paddingRight: t.PADDING_LG_VERTICAL,
                                            height: t.TABLE_BUTTON_HEIGHT,
                                            lineHeight: t.TABLE_BUTTON_HEIGHT,
                                            borderRadius: '.1rem',
                                        }}
                                         onClick={ ()=>{item.callback(selectArr)}}
                            >
                                <span>{item.label}</span>
                            </span>
                        })
                    }
                </div>
                <table className={`table ${striped?'table-striped':''} ${bordered?'table-bordered':''} ${hover?'table-hover':''}`}>
                    <thead>
                        <tr>
                            {
                                select ? <th style={{width:t.TABLE_SELECT_WIDTH}}><input type="checkbox" checked={selectAll} onChange={ this.selectAll }/></th> : null
                            }
                        {
                            columns.map((item,i)=>{
                                return <th key={i}>{ item.label }</th>
                            })
                        }
                        </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((item,i)=>{
                            return <tr key={i}>
                                {
                                    select ? <td><input type="checkbox" checked={ selectArr.includes(item.id) } onChange={ this.checkboxChange }/></td> : null
                                }
                                {
                                    columns.map((val,idx)=>{
                                        return <td key={idx}>{ val.render ? val.render(item[val.value], item) : item[val.value] }</td>
                                    })
                                }
                            </tr>
                        })
                    }
                    </tbody>
                </table>
                <div>
                {
                    config.info ?
                        <div style={{display:'inline-block',margin:'20px 0',padding:'6px 0'}}>
                            <span style={{marginRight: t.PADDING_SM_HORIZONTAL}}>{ data.length!=0 ? info : config.language.infoEmpty}</span>
                            <select
                                style={{width: '5rem',height: '1.5rem'}}
                                value={ config.pageLength }
                                onChange={ this.pageLengthChange }
                            >
                                {
                                    config.lengthMenu.map((item,i)=>{
                                        return <option key={i} value={item}>{item}</option>
                                    })
                                }
                            </select>
                        </div>
                        : null
                }
                {
                    config.paging ?
                        <div style={{display:'inline-block',float:'right'}}>
                            <Pagination
                                total={ total }
                                previousText={ config.paginate.previous }
                                nextText={ config.paginate.next }
                                goFirstText={ config.paginate.first }
                                goLastText={ config.paginate.last }
                                current={ current }
                                pageSize={ config.pageLength }
                                change={
                                    (index)=>{ this.pageChange(index) }
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
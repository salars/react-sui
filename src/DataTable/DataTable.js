import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
import Pagination from 'react-sui/Pagination';
import CheckBox from 'react-sui/CheckBox';
import Select from 'react-sui/Select';
import defaultConfig from './config';
import { autobind } from 'core-decorators';
import './style.less';
import NO_RESULT_IMG from './images/no_result.png';
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
        selectArr:[],
        checkAll: false,//所有数据全选
        newColumns:[],
    };
    componentWillMount(){
        const mergeConfig = Object.assign({}, defaultConfig, this.props.config);
        this.setState({config: mergeConfig},()=>{
            this.getData(1,this.state.config.pageLength);
        });

        const {columns} = this.props;
        let arr = [];
        for(let i=0;i<columns.length;i++){
            let obj = columns[i];
            if(columns[i].sort){
                obj = Object.assign({},obj,{asc:false,desc:false});
            }
            arr.push(obj);
        }
        this.setState({newColumns:arr});
    }
    getData(pageNum,pageSize){
        //根据url获取数据......
        if(this.props.url){
            const { config,current,newColumns } = this.state;
            let param = {};
            if(config.paging){
                param = Object.assign({},{page:current,rows:config.pageLength});
            }
            for(let i=0;i<newColumns.length;i++){
                if(newColumns[i].sort){
                    if(newColumns[i].asc){
                        param = Object.assign({},param,{dir:'asc',col:newColumns[i].value});
                    }else if(newColumns[i].desc){
                        param = Object.assign({},param,{dir:'desc',col:newColumns[i].value});
                    }
                }
            }
            console.log(param);

            //模拟数据
            let data=[];
            const total = 104;
            for(let i=0;i<pageSize;i++){
                const sum = (pageNum-1)*pageSize+i+1;
                if(sum<=total){
                    data.push({ id: sum, name:'test'+sum, nickName: 'nick'+sum, tel: '12341341234' });
                }
            }
            const { checkAll } = this.state;

            let arr = [];
            if(checkAll){
                for(let i=0;i<data.length;i++){
                    arr.push(data[i].id);
                }
            }
            this.setState({data: data,total:total,selectArr:arr});
        }
    }
    pageChange(index){//选择页
        this.setState({current:index},()=>{this.getData(index,this.state.config.pageLength)});
    }
    pageLengthChange(value){
        const mergeConfig = Object.assign({}, this.state.config, {pageLength: value});
        this.setState({config: mergeConfig,current:1},()=>{
            this.getData(this.state.current,value);
        });
    }
    selectAll(val){//全选变化
        const {data} = this.state;
        let arr = [];
        if(val){
            for(let i=0;i<data.length;i++){
                arr.push(data[i].id);
            }
        }else{
            this.setState({checkAll:false});
        }
        this.setState({selectArr:arr});
    }
    selectTrChange(id,val){//tbody内行选择变化
        let arr = this.state.selectArr;
        if(val){
            arr = [...arr,id];
        }else{
            this.setState({checkAll:false});
            for(let i=0;i<arr.length;i++){
                if(id==arr[i]){
                    arr.splice(i,1);
                }
            }
        }
        this.setState({selectArr: arr});
    }
    checkAllChange(val){//全选按钮状态改变
        this.setState({checkAll: val});
        let arr = [];
        const {data} = this.state;
        if(val){
            for(let i=0;i<data.length;i++){
                arr.push(data[i].id);
            }
        }
        this.setState({selectArr: arr});
    }
    thClick(item){//排序点击事件
        if(item.sort){
            if(!item.asc && !item.desc){
                item.asc = !item.asc;
            }else{
                item.asc = !item.asc;
                item.desc = !item.desc;
            }
            let arr = this.state.newColumns;
            for(let i=0;i<arr.length;i++){
                if(arr[i].sort){
                    if(arr[i].value==item.value){
                        arr.splice(i,1,item);
                    }else{
                        arr[i].asc = false;
                        arr[i].desc = false;
                    }
                }
            }
            this.setState({newColumns: arr},()=>{this.getData(1,this.state.config.pageLength);});
        }
    }
    render(){
        const { t,striped,bordered,hover,select,buttons,selectAllButton } = this.props;
        const { data,current,total,config,selectArr,checkAll,newColumns } = this.state;
        const info = config.language.info
            .replace('_START_',(current-1)*config.pageLength)
            .replace('_END_',(current-1)*config.pageLength+data.length)
            .replace('_TOTAL_',total);
        let pageLengthConfig = [];
        for(let i=0;i<config.lengthMenu.length;i++){
            pageLengthConfig.push({label:config.lengthMenu[i],value:config.lengthMenu[i]});
        }
        return (
            <div className="data-table">
                <div style={{marginBottom:t.MARGIN_MEDIUM}} className="buttons">
                    {
                        selectAllButton ?
                            <CheckBox text="全选" checked={ checkAll } fnClick={ (name,value)=>{ this.checkAllChange(value)} } />
                            : null
                    }
                    {
                        buttons.map((item,i)=>{
                            return <span key={i}
                                        style={{
                                            display: ( item.className!='select-none-hide' || selectArr.length!=0 ) ? 'inline-block': 'none',
                                            cursor:'pointer',
                                            marginRight: t.MARGIN_SMALL,
                                            paddingLeft: t.PADDING_LG_VERTICAL,
                                            paddingRight: t.PADDING_LG_VERTICAL,
                                            height: t.TABLE_BUTTON_HEIGHT,
                                            lineHeight: t.TABLE_BUTTON_HEIGHT,
                                            borderRadius: '.1rem',
                                        }}
                                         onClick={ ()=>{item.callback( checkAll ? {checkAll: true} : selectArr)} }
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
                                select ?
                                    <th style={{width:t.TABLE_SELECT_WIDTH}}>
                                        <CheckBox checked={ (selectArr.length==data.length && data.length>0) || checkAll } fnClick={ (name,value)=>this.selectAll(value) }/>
                                    </th> : null
                            }
                        {
                            newColumns.map((item,i)=>{
                                return <th key={i}
                                           onClick={ ()=>this.thClick(item) }
                                           style={{paddingRight:'25px',position:'relative'}}
                                           className={ (item.sort ? "sorting " :"") + (item.asc ? "sorting_asc " :"") +(item.desc ? "sorting_desc" :"")}>
                                    { item.label }
                                </th>
                            })
                        }
                        </tr>
                    </thead>
                    {
                        data.length > 0 ?
                            <tbody>
                            {
                                data.map((item,i)=>{
                                    return <tr key={i} onClick={ ()=>{ this.selectTrChange(item.id,!(selectArr.includes(item.id) || checkAll)) } }>
                                        {
                                            select ?
                                                <td>
                                                    <CheckBox name={item.id} checked={ selectArr.includes(item.id) || checkAll } />
                                                </td> : null
                                        }
                                        {
                                            newColumns.map((val,idx)=>{
                                                return <td key={idx}>{ val.render ? val.render(item[val.value], item) : item[val.value] }</td>
                                            })
                                        }
                                    </tr>
                                })
                            }
                            </tbody>
                            :
                            <tbody>
                                <tr>
                                    <td colSpan={ newColumns.length + (select ? 1 : 0) } style={{padding:'5rem 0',textAlign:'center',backgroundColor:t.WHITE}}>
                                        <img src={ NO_RESULT_IMG }/>
                                    </td>
                                </tr>
                            </tbody>
                    }
                </table>
                <div>
                {
                    config.info ?
                        <div style={{display:'inline-block',margin:'20px 0',padding:'6px 0'}}>
                            <span style={{marginRight: t.PADDING_SM_HORIZONTAL}}>{ data.length!=0 ? info : config.language.infoEmpty}</span>
                            {
                                config.paging ?
                                    <div style={{display:'inline-block',width:'5rem'}}>
                                        <Select
                                            value={ config.pageLength }
                                            config={{
                                                options: pageLengthConfig,
                                            }}
                                            change={ (name,value)=>this.pageLengthChange(value) }
                                        >
                                            {
                                                config.lengthMenu.map((item,i)=>{
                                                    return <option key={i} value={item}>{item}</option>
                                                })
                                            }
                                        </Select>
                                    </div>
                                    :null
                            }
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
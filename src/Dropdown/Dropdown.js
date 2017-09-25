import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
import {Button, ButtonGroup} from 'react-sui/Button';
import { autobind } from 'core-decorators';
@autobind
class Dropdown extends Component {
    static props = {
        type: PropTypes.string,
        size: PropTypes.string,
        label: PropTypes.string,
        options: PropTypes.array,
        split: PropTypes.bool,
        caret: PropTypes.bool,
        right: PropTypes.bool,
        up: PropTypes.bool,
        toggle: PropTypes.bool,
    };
    static defaultProps = {
        type: 'default',
        size:'md',
        split: false,
        caret: true,
        right: false,
        up: false,
        toggle: false,
        toggleStatus: false,
    };
    state = {
        open: false
    };
    itemClick(item){
        if(this.props.toggle){
            item.toggle = !item.toggle;
        }
        this.setState({});
        if(!item.disabled){
            item.fnClick && item.fnClick(item.label,item.value,item.toggle);
        }
    }

    globalEventHandler(e){
        if(e.path.includes(this.refs.dropDownHandler)){
            this.setState(state=>{
                return {open: !state.open}
            });
        }else{
            let flag = false;
            for(let i=0;i<e.path.length;i++){
                if(e.path[i].nodeName=='LI' && e.path[i].className.indexOf('dropdown-li')!=-1){
                    flag = true;
                }
            }
            if(this.props.toggle && flag){

            }else{
                this.setState({open:false})
            }
        }
    }
    componentDidMount(){
        document.body.addEventListener('click',this.globalEventHandler);
    }
    componentWillUnmount(){
       document.body.removeEventListener('click',this.globalEventHandler);
    }
    render(){
        const { type,t,size,label,options,split,caret,right,up,style } = this.props;
        const { open } = this.state;
        return (
            <div className={(up ? "dropup " : "dropdown ") + (open ? 'open':'') } style={ {display: 'inline-block'} }>
                <div ref="dropDownHandler">
                {
                    split ?
                        <ButtonGroup>
                            <Button label={label} type={type} size={size}/>
                            {
                                caret ?
                                    <button className={`btn btn-${size} btn-${type}` }>
                                        <i className={"fa "+(up ? "fa-caret-up" : "fa-caret-down")}></i>
                                    </button>
                                    : null
                            }
                        </ButtonGroup>
                        :
                        <button className={`btn btn-${size} btn-${type}` }>
                            { label }
                            {
                                caret ?
                                    <i className={"fa "+(up ? "fa-caret-up" : "fa-caret-down")} style={ {marginLeft: t.MARGIN_MEDIUM} }></i>
                                    :null
                            }
                        </button>
                }
                </div>
                <ul className={"dropdown-menu " + (right ? "dropdown-menu-right" :"")}>
                {
                    options.map((item,i)=>{
                        return <li key={ i } ref="li" className={"dropdown-li "+(item.disabled ? "disabled":"")} style={ {cursor: 'pointer'} } onClick={ _=>this.itemClick(item) }>
                            <a style={item.toggle? {color:'#aaa'}:{}}>{item.label}</a>
                        </li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default composeTheme(Dropdown);
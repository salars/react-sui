import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
import {Button, ButtonGroup} from 'react-sui/Button';
import { autobind } from 'core-decorators';
@autobind
class Dropdown extends Component {
    dropDownHandler = null;
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
        iconName: PropTypes.string,
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
            this.setState({open: true});
        }
        if(!item.disabled){
            item.fnClick && item.fnClick(item.label,item.value,item.toggle);
        }
    }

    globalEventHandler(e){
        if(e.path.includes(this.dropDownHandler)){
            this.setState(state=>{
                return {open: !state.open}
            });
        }else{
            this.setState({open:false})
        }
    }
    componentDidMount(){
        document.body.addEventListener('click',this.globalEventHandler);
    }
    componentWillUnmount(){
       document.body.removeEventListener('click',this.globalEventHandler);
    }
    render(){
        const { type,t,size,label,options,split,caret,right,up,iconName } = this.props;
        const { open } = this.state;
        return (
            <div className={(up ? "dropup " : "dropdown ") + (open ? 'open':'') } style={ {display: 'inline-block'} }>
                <div ref={ (dropDownHandler)=>this.dropDownHandler=dropDownHandler }>
                {
                    split ?
                        <ButtonGroup>
                            { iconName ? <i className={"fa fa-"+iconName} aria-hidden="true" style={{marginRight:'.3rem'}}></i> : null }
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
                            { iconName ? <i className={"fa fa-"+iconName} aria-hidden="true" style={{marginRight:'.3rem'}}></i> : null }
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
                        return <li key={ i } className={"dropdown-li "+(item.disabled ? "disabled":"")} style={ {cursor: 'pointer'} } onClick={ _=>this.itemClick(item) }>
                            <a style={item.toggle? {color:'#aaa'}:{}}>
                                { item.iconName ? <i className={"fa fa-"+item.iconName} aria-hidden="true" style={{display:'inline-block',width: '25px'}}></i> : null }
                                {item.label}
                            </a>
                        </li>
                    })
                }
                </ul>
            </div>
        )
    }
}

export default composeTheme(Dropdown);
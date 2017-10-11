import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';

class SideLabel extends Component{
    static props={
        label:PropTypes.string,
    };
    render(){
        const {label} = this.props;
        return(
            <div style={{marginBottom:'1rem'}}>
                <span style={{width:'.35rem',height:'1.25rem',background:'#34bf98',display:'inline-block',verticalAlign:'middle',marginRight:'.3rem'}}></span>
                <span style={{fontSize:'.9rem'}}>{ label }</span>
            </div>
        )
    }
}

export default composeTheme(SideLabel);
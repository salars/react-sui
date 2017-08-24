import React,{ Component } from 'react';
import { composeTheme } from '../helpers';
import PropTypes from 'prop-types';
class Col extends Component {
    static props = {
        lg:  PropTypes.string,
        md: PropTypes.string,
        sm: PropTypes.string,
        xs: PropTypes.string
    };
    getClassName(){
        const props = this.props;
        return ['lg','md','sm','xl'].map((item)=>{
           if(props[item]) {
               return `col-${item}-${props[item]}`;
           }else{
               return "";
           }
        }).join(" ");
    }
    render(){
        const className = this.getClassName();
        return (
            <div className={ className }>
                { this.props.children }
            </div>
        );
    }
}

export default composeTheme(Col);
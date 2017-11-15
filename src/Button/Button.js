import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
class Button extends Component {
    static props = {
        type: PropTypes.string,
        label:PropTypes.string,
        onClick:PropTypes.func,
        disabled:PropTypes.bool
    };
    static defaultProps = {
        type:'default',
        size:'md'
    };
    render(){
        const { size,type,label,onClick,className,t,disabled } = this.props;
        return (
            <button className={`btn btn-${size} btn-${type}`+ ( disabled ? " btn-disabled":"" )} onClick={ onClick }
            >
                { label }
                { this.props.children }
            </button>
        )
    }
}

export default composeTheme(Button);
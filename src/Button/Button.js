import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
class Button extends Component {
    static props = {
        type: PropTypes.string,
        label:PropTypes.string,
        onClick:PropTypes.func
    };
    static defaultProps = {
        type:'default',
        size:'md'
    };
    render(){
        const { size,type,label,onClick,className,t } = this.props;
        return (
            <button className={`btn btn-${size} btn-${type}` } onClick={ onClick }
            >
                { label }
            </button>
        )
    }
}

export default composeTheme(Button);
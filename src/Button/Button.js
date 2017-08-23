import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
    static props = {
        type: PropTypes.string,
        label:PropTypes.string,
        onClick:PropTypes.func
    };
    static defaultProps = {
        type:'default'
    };
    render(){
        const { type,label,onClick } = this.props;
        return (
            <button className={"btn btn-"+type } onClick={ onClick }>
                { label }
            </button>
        )
    }
}
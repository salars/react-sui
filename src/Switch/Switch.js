import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
import { autobind } from 'core-decorators';

@autobind
class Switch extends Component {
    static props = {
        name: PropTypes.string,
        value: PropTypes.bool,
        change: PropTypes.func,
        text: PropTypes.object,
    };
    static defaultProps = {
        value: false,
    };
    valueChange(){
        const { name,value,change} = this.props;
        change && change(name,!value);
    }
    render(){
        const { value,text,t } = this.props;
        const style = value ? { backgroundColor: t.PRIMARY_COLOR } : {};
        const innerStyle = (text && value) ? {marginLeft: '6px', marginRight: '24px'} : {marginLeft: '24px', marginRight: '6px'};
        return (
            <span
                className={'switch '+( value ? 'switch-checked' : '')}
                style={
                    {
                        position: 'relative',
                        display: 'inline-block',
                        boxSizing: 'border-box',
                        height: '22px',
                        minWidth: '44px',
                        lineHeight: '20px',
                        verticalAlign: 'middle',
                        borderRadius: '20px',
                        border: '1px solid transparent',
                        backgroundColor: 'rgba(0,0,0,.25)',
                        cursor: 'pointer',
                        transition: 'all .36s',
                        WebkitTransition: 'all .36s',
                        ...style
                    }
                }
                onClick={ this.valueChange }
            >
                <span style={ {
                    color: '#fff',
                    fontSize: '12px',
                    display: 'block',
                    ...innerStyle
                } }>{ text ? (value ? text.checked : text.unchecked) : '' }</span>
            </span>
        )
    }
}
export default composeTheme(Switch);
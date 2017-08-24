import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
import Button from 'react-sui/Button';
class Dropdown extends Component {
    static props = {
        type: PropTypes.string,
        size: PropTypes.string,
        label: PropTypes.string,
        options: PropTypes.array,
    };
    static defaultProps = {
        type: 'default'
    };
    render(){
        const { type,t,size,label } = this.props;
        return (
            <div>
                <Button label={ label } type={ type }/>

            </div>
        )
    }
}

export default composeTheme(Dropdown);
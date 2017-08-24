import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {composeTheme}  from '../helpers';

class Container extends Component {
    static props = {
        fluid: PropTypes.bool
    };

    render() {
        const {fluid, className, t} = this.props;
        return (
            <div className={`container${fluid? "-fluid":""} ${className || ""}`}>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default composeTheme(Container);

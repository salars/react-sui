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
            <div className={className}
                 style={
                     {
                         width: fluid ? t.CONTAINER_FULL_WIDTH : t.CONTAINER_FIXED_WIDTH,
                         margin:"0 auto"
                     }
                 }>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default composeTheme(Container);

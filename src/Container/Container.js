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
                         width: fluid ? 'auto': t.CONTAINER_FIXED_WIDTH,
                         margin:"0 auto",
                         padding:`0 ${t.GRID_GUTTER_HALF_WIDTH}px 0`
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

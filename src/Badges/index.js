import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';

class Badges extends Component {
    static props = {
        label: PropTypes.string,
    };

    render() {
        const {label} = this.props;
        return (
            <span className="badge" style={{
                marginLeft:2
            }}>
                {label}
            </span>
        )
    }
}

export default composeTheme(Badges);
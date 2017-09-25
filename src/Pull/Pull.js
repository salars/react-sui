import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class Pull extends Component {
    static props = {
        float: PropTypes.string
    };
    static defaultProps = {
        float: "left"
    };

    render() {
        const {float} = this.props;
        return (
            <div className={`pull-${float}`}>
                {
                    this.props.children
                }
            </div>
        )
    }
}


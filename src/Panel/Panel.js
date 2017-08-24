import React, {Component} from 'react';
import {composeTheme} from '../helpers';
import PropTypes from 'prop-types';
class Panel extends Component {
    static props = {
      type: PropTypes.string
    };
    static defaultProps = {
        type:"default"
    };
    render() {
        const {t,title,type} = this.props;
        return (
            <div className={`panel panel-${type}`}>
                {
                 title?
                <div className="panel-heading">{title}</div>
                     :null
                }
                <div className="panel-body">
                {
                    this.props.children
                }
                </div>
            </div>
        )
    }
}

export default composeTheme(Panel);
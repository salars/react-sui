import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';
import '../../app/css/normal.less';

@autobind
class CheckBox extends Component {
    static Props = {
        text: PropTypes.string,
        name: PropTypes.string,
        fnClick: PropTypes.func,
        checked: PropTypes.bool
    };
    // state = {
    //     checked: false
    // };

    check() {
        const {name, fnClick, checked} = this.props;
        fnClick && fnClick(name,!checked)
    };

    render() {
        const {t, text,checked} = this.props;
        return (
            <div style={{
                display: 'inline-block'
            }}>
                <div className={"checkBox" + (checked ? " checked" : "")} onClick={this.check} style={{
                    verticalAlign: 'Middle'
                }}>
                </div>
                {
                    text?
                        <span style={{
                            margin: '0 .3rem',
                        }}>{text}</span>
                        :
                        ""
                }
            </div>
        )
    }
}

export default composeTheme(CheckBox);

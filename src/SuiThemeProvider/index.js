import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,rem } from '../helpers';
class SuiThemeProvider extends Component {
    static props = {
        theme:PropTypes.string
    };
    render(){
        const { t } = this.props;
        return (
            <div style={ {
                fontSize:rem(t.FONT_SIZE_BASE),
                backgroundColor:t.BODY_BG
            }}>
                {
                    this.props.children
                }
            </div>
        )
    }
}
export default composeTheme(SuiThemeProvider);
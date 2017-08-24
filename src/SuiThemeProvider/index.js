import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme } from '../helpers';
class SuiThemeProvider extends Component {
    static props = {
        theme:PropTypes.string
    };
    render(){
        const { t } = this.props;
        return (
            <div style={ {
                fontSize:t.FONT_SIZE_BASE,
                backgroundColor:t.BODY_BG,
                minHeight:'100%'
            }}>
                {
                    this.props.children
                }
            </div>
        )
    }
}
export default composeTheme(SuiThemeProvider);
import React, {Component} from 'react';
import {composeTheme} from '../helpers';
class Panel extends Component {
    render() {
        const {t,title} = this.props;
        return (
            <div style={{
                backgroundColor: t.PANEL_BG,
                borderRadius: t.BORDER_RADIUS,
                padding: t.GRID_GUTTER_HALF_WIDTH
            }}>
                {
                 title?
                <div style={ {
                    fontSize:t.FONT_SIZE_LARGE,
                    lineHeight:t.LINE_HEIGHT_BASE,
                    color:t.GRAY
                } }>{title}</div>
                     :null
                }
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default composeTheme(Panel);
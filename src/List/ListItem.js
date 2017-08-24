import React , { Component } from 'react';
import { composeTheme } from '../helpers';

class ListItem extends Component {
    render(){
        const { t } = this.props;
        return (
            <div style={ {marginRight:t.GRID_GUTTER_HALF_WIDTH,verticalAlign:"middle",display:"inline-block"} }>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default composeTheme(ListItem);
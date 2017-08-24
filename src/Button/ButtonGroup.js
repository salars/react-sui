import React,{ Component } from 'react';
import { composeTheme } from '../helpers';
import { List,ListItem } from '../List';

class ButtonGroup extends Component {
    render(){
        return (
            <div className="btn-group">
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default composeTheme(ButtonGroup);
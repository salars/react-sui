import React,{ Component } from 'react';
import { composeTheme } from '../helpers';
import { List,ListItem } from '../List';

class ButtonGroup extends Component {
    render(){
        return (
            <List>
                {
                    this.props.children.map((child,idx)=>{
                       return <ListItem key={idx}>{child}</ListItem>;
                    })
                }
            </List>
        )
    }
}

export default composeTheme(ButtonGroup);
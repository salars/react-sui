import React , { Component } from 'react';
import { composeTheme } from '../helpers';

class Grid extends Component {
    render(){
        return (
            <div style={{display:"flex"}}>
                {
                    this.props.children
                }
            </div>
        )
    }
}

export default composeTheme(Grid);
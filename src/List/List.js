import React , { Component } from 'react';
import ClearFix from '../ClearFix';
import { composeTheme } from '../helpers';

class List extends Component {
    render(){
        return (
            <ClearFix>
                {
                    this.props.children
                }
            </ClearFix>
        )
    }
}

export default composeTheme(List);
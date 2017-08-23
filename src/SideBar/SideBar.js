import React,{ Component } from 'react';
import PropTypes from 'prop-types';
export default class SideBar extends Component {
    static props = {
        right:PropTypes.bool,
        left:PropTypes.bool
    };
    render(){
        return (
            <div className="col-12 col-md-3 col-xl-2 bd-sidebar">
                {
                    this.props.children
                }
            </div>
        )
    }
}
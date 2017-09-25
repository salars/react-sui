import React, {Component} from 'react';

export default class ClearFix extends Component {
    render() {
        return (
            <div className="clearfix">
                {
                    this.props.children
                }
            </div>
        )
    }
}


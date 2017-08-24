import React, {Component} from 'react';
import {composeTheme} from "../helpers";

class BreadCrumb extends Component {
    render() {
        const {t, pathInfo} = this.props;
        return (
            pathInfo instanceof Array && pathInfo.length > 0 ?
                <ul style={{
                    paddingBottom: 1.5
                }}>
                    {
                        pathInfo.map((item, i) => {
                            return (
                                <li style={{
                                    float: 'left',
                                    listStyleType: 'none',
                                }} key={ i }>
                                    <span>{item.content}</span>
                                    {
                                        i == pathInfo.length-1?"":<span style={{
                                            display:'inline-block',
                                            color:t.GRAY_BOLD,
                                        }}>/</span>
                                    }
                                </li>
                            )
                        })
                    }
                </ul>
                :
                null
        )
    }
}

export default composeTheme(BreadCrumb);
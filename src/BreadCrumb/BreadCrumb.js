import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';

class BreadCrumb extends Component {
    static props = {
        pathInfo: PropTypes.array,
    };
    render() {
        const {t, pathInfo} = this.props;
        return (
            pathInfo instanceof Array && pathInfo.length > 0 ?
                <ul className="breadcrumb" style={{
                    backgroundColor:'white'
                }}>
                    {
                        pathInfo.map((item, i) => {
                            return (
                                <li className={`breadcrumb-item ${item.url?"":' active'}`} key={i} onClick={() => {
                                    item.url
                                }}>
                                    {
                                        item.url?
                                            <span style={{
                                                color:t.BREAD_COLOR,
                                                cursor:'pointer'
                                            }}>{item.content}</span>
                                            :
                                            <span>{ item.content }</span>
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
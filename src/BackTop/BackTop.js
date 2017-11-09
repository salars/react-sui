import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';

const scrollTop = 100;

@autobind
class BackTop extends Component {
    state = {
        show: false
    };

    onScroll() {
        let top = document.documentElement.scrollTop;
        if (top > scrollTop) {
            this.setState({show: true});
        } else {
            this.setState({show: false});
        }
    }

    goTop(){
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }

    componentWillMount() {
        document.addEventListener("scroll", this.onScroll);
    }

    componentWillUnmount() {
        document.removeEventListener("scroll", this.onScroll);
    }

    render() {
        const {show} = this.state;
        return (
            <div className={'back-top' + (show ? ' show' : '')} onClick={ this.goTop }>
                <i className="fa fa-chevron-up" aria-hidden="true" style={{fontSize:'1.4rem',color:'rgb(54, 155, 233)'}}></i>
            </div>
        )
    }
}

export default composeTheme(BackTop);
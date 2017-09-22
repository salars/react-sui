import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';

const PAGE_LEN = 5;
class Pagination extends Component {
    static props = {
        total: PropTypes.number,
        current: PropTypes.number,
        pageSize: PropTypes.number,
        change: PropTypes.func,
        previousText: PropTypes.string,
        nextText: PropTypes.string,
        goFirstText: PropTypes.string,
        goLastText: PropTypes.string,
        type: PropTypes.string,
    };
    static defaultProps = {
        total: 0,
        current: 1,
        pageSize: 10,
        previousText: "<",
        nextText: ">",
        goFirstText: "|<",
        goLastText: ">|",
    };
    last(){
        const {total, pageSize} = this.props;
        let last =  Math.ceil(total / pageSize);
        if(last < 1){
            last = 1;
        }
        return last;
    }
    pages(){
        const {current, total, pageSize} = this.props;
        let max = Math.ceil(total / pageSize);
        if(max<1){
            max = 1;
        }
        let edge = Math.ceil(PAGE_LEN / 2);
        let pages = [];
        if (max <= PAGE_LEN || current <= edge) {
            let end = max > PAGE_LEN ? PAGE_LEN : max;
            for (let i = 0; i < end; i++) {
                pages.push(i + 1);
            }
        } else {
            if (current > max - edge) {
                for (let i = 0; i < PAGE_LEN; i++) {
                    pages.unshift(max - i);
                }
            } else {
                for (let i = 0; i < PAGE_LEN; i++) {
                    pages.push(current + (i - edge + 1));
                }
            }
        }
        return pages;
    }
    render(){
        const { total, current, pageSize, change, previousText, nextText, type, goFirstText, goLastText } = this.props;
        const last = this.last();
        const pages = this.pages();
        return (
            <ul className={`pagination pagination-${type}`}>
                <li
                    className={ current ===1 ? " disabled":"" }
                    onClick={ _ => {
                        if(current !== 1){
                            change(1)
                        }
                    }}>
                    <a>{ goFirstText }</a>
                </li>
                <li
                    className={ current === 1 ? " disabled":"" }
                    onClick={ _ => { if(current !== 1){change( current -1 )} } }>
                    <a>{ previousText }</a>
                </li>
                {
                    pages.map((item,i) => {
                        return (
                            <li key={i} className={ current === item?" active":"" }
                                onClick={ _ => { change(item) } }>
                                <a>{ item }</a>
                            </li>
                        )
                    })
                }
                <li
                    className={ current === last ? " disabled":"" }
                    onClick={ _ => {
                        if(current !== last){
                            change(current+1);
                        }
                    }}
                >
                    <a>{ nextText }</a>
                </li>
                <li
                    className={ current === last ? " disabled":"" }
                    onClick={
                        ()=>{
                            if(current !==last){
                                change(last);
                            }
                        }
                    }
                >
                    <a>{ goLastText }</a>
                </li>
            </ul>
        )
    }
}

export default composeTheme(Pagination);
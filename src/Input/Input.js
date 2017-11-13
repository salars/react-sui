import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';


@autobind
class Input extends Component {
    inputText = null;
    static props = {
        name: PropTypes.string,
        value: PropTypes.string,
        change: PropTypes.func,
        placeholder: PropTypes.string,
        maxlength: PropTypes.number,
        unit: PropTypes.string,
        type: PropTypes.string,
        formatter: PropTypes.func,
        min: PropTypes.number,
    };

    //默认value为空
    static defaultProps = {
        value: ''
    };

    onChange(e) {
        const {value} = e.target;
        const {name, change, maxlength} = this.props;
        if (maxlength && value.length > maxlength) {
            let valStr = value.slice(0, maxlength);
            this.inputText.value = valStr;
            change(name, value);
        } else {
            change(name, value);
        }
    }

    //监听value变化 判断初始值是否为空
    // componentWillReceiveProps(nextProps) {
    //     const {value} = this.props;
    //     if (nextProps.value != this.props.value) {
    //         if (value) {
    //             this.refs.input.value = value;
    //         } else {
    //             this.refs.input.value = '';
    //         }
    //     }
    // }

    render() {
        const {type, value, maxlength, placeholder, min, unit, formatter} = this.props;
        let newValue = value;
        if (formatter) {
            newValue = formatter(value);
        }
        return (
            <div style={{
                position: 'relative'
            }}>
                <input type={type || "text"} value={newValue} ref={ (input)=>{ this.inputText = input } } className="form-control"
                       onBlur={this.onChange} maxLength={maxlength || 999} onChange={this.onChange}
                       placeholder={placeholder} step="any" min={min}/>
                <span style={{
                    position: 'absolute',
                    right: '.25rem',
                    top: '.4rem'
                }}>{unit || ''}</span>
            </div>
        )
    }
}


export default composeTheme(Input);
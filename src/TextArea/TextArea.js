import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';

@autobind
class TextArea extends Component{
    static props = {
        change:PropTypes.func,
        name:PropTypes.string,
        value:PropTypes.string,
        maxlength:PropTypes.number,
        placeholder:PropTypes.string,
        character:PropTypes.string
    };
    state={
        number:''
    };
    componentWillMount(){
        const {maxlength,value} = this.props;
        this.setState({number:(maxlength - value.length)});
    }
    onChange(e){
        const {value} = e.target;
        const { name,change,maxlength } = this.props;
        this.setState({number:(maxlength - this.refs.input.value.length)});
        change(name,value);
    }
    render(){
        const {placeholder, maxlength, value, character} = this.props;
        const {number} = this.state;
        return(
            <div style={{position:'relative'}}>
                <textarea placeholder={ placeholder } ref="input" className='form-control' onChange={ this.onChange } maxLength={ maxlength || 10000 } value={ value }>
                    { value }
                </textarea>
                <pre ref='pre' style={{position:'absolute',visibility:'hidden',whiteSpace:'pre-wrap',width:'100%'}}>
                    { value }
                </pre>
                {
                    character?
                        <div style={{position:'absolute',right:'.5rem',bottom:'0'}}>
                            还可以输入
                            <span style={{color:'red',fontWeight:'normal'}}>{ number }</span>
                            字
                        </div>
                        :
                        null
                }
            </div>
        )
    }
}

export default composeTheme(TextArea);
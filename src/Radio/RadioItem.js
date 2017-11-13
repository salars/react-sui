import React ,{ Component } from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';

@autobind
class RadioItem extends Component {
    static props={
        data:PropTypes.object,
        click:PropTypes.func,
        checked:PropTypes.bool,
    };
    render(){
        const {checked,click,data} = this.props;
        const { label,value,disabled,errorInfo } = data;
        return(
            <div className={"radio-item "+(checked ? " checked":"")+(disabled?" disabled":'') } onClick={ _  => { !disabled && click && click(value) } } >
                {
                    disabled?
                        <span style={{position:'relative'}} className='radio-disabled'>
                            <span className='radio-label'>{ label }</span>
                            <span style={{position:'absolute',top:'.5rem',right:'.4rem',display:'inlineblock',width:'3rem'}} className='radio-error'>{ errorInfo }</span>
                        </span>
                        :
                        label
                }
            </div>
        )
    }
}

export default composeTheme(RadioItem);
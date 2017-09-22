import React ,{ Component } from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';

@autobind
class RadioItem extends Component {
    static props={
        data:PropTypes.string,
        click:PropTypes.func,
        checked:PropTypes.bool
    };
    render(){
        const {checked,click,data} = this.props;
        const { label,value } = data;
        return(
            <div className={"radio-item "+(checked ? " checked":"") } onClick={ _ => { click && click(value) }} >
                { label }
            </div>
        )
    }
}

export default composeTheme(RadioItem);
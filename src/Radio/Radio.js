import RadioItem from './RadioItem';
import React , { Component } from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import { autobind } from 'core-decorators';
@autobind
class Radio extends Component {
    static props = {
        name: PropTypes.string,
        change: PropTypes.func,
        value: PropTypes.string,
        config: PropTypes.object
    };
    _change(value){
        const { change,name } = this.props;
        change(name,value);
    }
    // componentWillMount(){
    //     const { name, change, value, config } = this.props;
    //     if(config.options&&config.options.length){
    //         let val = config.options[0].value;
    //         change(name,val);
    //     }
    // }
    render() {
        const { value, config } = this.props;
        const { options } = config;
        return(
            <div className="radio">
                {
                    options?
                        options.map((item,i)=>{
                            return <RadioItem data={item} checked={ value == item.value } click={this._change} key={i}/>
                        })
                        :
                        null
                }
            </div>
        )
    }
}

export default composeTheme(Radio);
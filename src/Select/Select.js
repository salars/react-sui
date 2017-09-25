import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';
import '../../app/css/normal.less';


@autobind

class Select extends Component {
    static props = {
        name: PropTypes.string,
        change: PropTypes.func,
        value: PropTypes.string,
        config: PropTypes.string,
        multiple: PropTypes.bool,
        promiseValue: PropTypes.bool
    };

    state = {
        valueMap: {},
        showDropdown: false
    };

    componentWillMount(){
        document.body.addEventListener('click', this.bodyClickEventHandler);
        const {name, config, change, value} = this.props;
        let valueMap1 = {};
        if (config && config.options) {
            config.options.forEach(item => {
                valueMap1[item.value] = item.label;
            });
            this.setState({valueMap:valueMap1});
        }
        let _value = value;
        if(this.isEmpty(value) && config.options.length){
            _value = config.options[0].value;
        }
        if (!config || !config.placeholder) {
            change(name, _value);
        }
    };
    componentWillReceiveProps(nextProps){
        if(nextProps.config!= this.props.config){
            const { name, config, change, value} = this.props;
            let valueMap1 = {};
            if (config && config.options) {
                config.options.forEach(item => {
                    valueMap1[item.value] = item.label;
                });
                this.setState({valueMap:valueMap1});
                if(config.promiseValue){
                    if((
                            typeof value === "undefined" ||
                            value ==="" ||
                            valueMap1[value] === undefined)
                        && config.options.length ){
                        let val = config.options[0].value;
                        change(name,val)
                    }
                }
            }
        }
    }

    onSelect(val){
        const {multiple, value, name, change} = this.props;
        if (!multiple) {
            change(name, val);
            return;
        }
        let newValue = value;
        if (!(newValue instanceof Array)) {
            newValue = [];
        }
        newValue.push(val);
        change(name, newValue);
    };
    remove(v){
        const {multiple, value, name, change}  = this.props;
        if (multiple && value instanceof Array) {
            let newValue = value.filter(item => {
                return item !== v;
            });
            change(name, newValue);
        }
    };
    bodyClickEventHandler(e){
        let $select = document.querySelectorAll(".select");
        console.log(e.target);
        console.log($select);
        if ($select.length) {
            if ($select[0] === this.refs.select) {
                return;
            }
        }
        this.setState({showDropdown:false});
    };

    isEmpty(val){
        return val === "" || val === null || val === undefined;
    };

    componentWillUnmount(){
        document.body.removeEventListener('click', this.bodyClickEventHandler);
    }

    render() {
        const {config, value, multiple} = this.props;
        const {valueMap, showDropdown} = this.state;
        const {placeholder, options} = config || {};
        let newOptions = options || [];
        if (multiple) {
            newOptions = options.filter((item) => {
                if (value && value instanceof Array) {
                    return !value.includes("" + item.value);
                }
                return true;
            })
        }
        return (
            <div ref='select' className={`form-control select ${showDropdown ? "open" : ''}`} onClick={() => {
                return this.setState({showDropdown:!showDropdown});
            }}>
                <div className="dropdown-toggle">

                    {
                        this.isEmpty(value) || ( value instanceof Array && value.length === 0)
                            ?
                            <span className="placeholder">{placeholder}</span>
                            :
                            multiple ?
                                <div class="tags-container">
                                    {
                                        value.map((item,i) => {
                                            return (
                                                <span className="select-tags" key={i}>
                                        { valueMap["" + item] }
                                                    <i class="glyphicon glyphicon-remove"
                                                       on-click={
                                                           e =>{
                                                               e.preventDefault();
                                                               e.stopPropagation();
                                                               this.remove(item)
                                                           }
                                                       }
                                                    />
                                        </span>
                                            );
                                        })
                                    }
                                </div>
                                :
                                valueMap["" + value]
                    }
                    <span className="caret"/>
                </div>
                {
                    showDropdown ?
                        <ul className="dropdown-menu">
                            {
                                placeholder  && !multiple ?
                                    <li onClick={ _=>{ this.onSelect("") }}>{ placeholder}</li>
                                    :
                                    null
                            }
                            {
                                newOptions.map(
                                    (option,i) =>
                                        <li onClick={ _=>{ this.onSelect(option.value) } } key={i}>
                                            { option.label }
                                        </li>
                                )
                            }
                        </ul>
                        :
                        null
                }
            </div>
        )
    }
}

export default composeTheme(Select);
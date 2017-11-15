import React, {Component} from 'react';
import {composeTheme} from "../helpers";
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';

@autobind
class TagSelect extends Component {
    static props = {
        name: PropTypes.string,
        value: PropTypes.string,
        change: PropTypes.func,
        options: PropTypes.array
    };
    state = {
        selected: []
    };
    componentWillMount(){
        if(this.props.value){
            this.setState({selected:this.props.value.split(',')});
        }
    }
    toggleStatus(val){
        let {selected} = this.state;
        const {change,name} = this.props;
        let l = selected.length;
        for(let i=0;i<selected.length;i++){
            if(selected[i]==val){
                selected.splice(i,1);
            }
        }
        if(l==selected.length){
            selected.push(val);
        }
        this.setState({selected:selected});
        change && change(name,selected.join(','));
    }
    componentWillReceiveProps(nextProps){
        const {value} = this.props;
        if(nextProps.value){
            this.setState({selected:(value.split(','))});
        }
    }
    render() {
        const {options} = this.props;
        const {selected} = this.state;
        return(
            <div className='tag-select'>
                {
                    options.length && options.map((item,i)=>{
                        return(
                            <span className={ 'tag-item'+(selected.includes(item.value)?' checked':'') } onClick={ ()=>{this.toggleStatus(item.value)} } key={i}>
                                {
                                    item.label
                                }
                            </span>
                        )
                    })
                }
            </div>
        )
    }
}

export default composeTheme(TagSelect);
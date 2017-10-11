import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { composeTheme,getColorByType } from '../helpers';
import { autobind } from 'core-decorators';
import ReactDOM from 'react-dom';
@autobind
class Notification extends Component {
    static props = {
        type: PropTypes.string,
        msg: PropTypes.string,
    };
    static defaultProps = {
        type: 'info',
        msg: '',
    };
    componentDidMount(){
        let node = this.refs.notification;
        setTimeout(_=>{
            document.getElementsByClassName('notification-container')[0].removeChild(node.parentNode)
        },3000);
    }
    render(){
        const { type,msg } = this.props;
        return (
            <div className={ 'alert alert-' + type } ref='notification'>{ msg }</div>
        )
    }
}
export const notif = (msg, type) => {
    if(document.getElementsByClassName('notification-container').length==0){
        let div = document.createElement('div');
        div.setAttribute('class','notification-container');
        document.body.appendChild(div);
    }
    let div = document.createElement('div');
    const render = () => {
        ReactDOM.render(<Notification type={ type } msg={ msg }/>, div);
    };
    render();
    document.getElementsByClassName('notification-container')[0].appendChild(div);
};

export const danger = (msg) => {
    notif(msg, 'danger');
};

export const success = (msg) => {
    notif(msg, 'success');
};

export const warning = (msg) => {
    notif(msg, 'warning');
};

export const info = (msg,fn)=>{
    notif(msg, 'info');
};
export default composeTheme(Notification);
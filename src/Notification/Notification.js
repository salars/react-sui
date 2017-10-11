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
    state = {
        flag: true,
    };
    componentDidMount(){

    }
    render(){
        const { type,msg } = this.props;
        return (
            <div className={ 'fade-zoom-in-enter-active alert alert-' + type }>{ msg }</div>
        )
    }
}
let keyGrowth = 1;
class NotificationQueue extends Component {
    state = {
        queue:[],
    };
    pushQueue(obj){
        let { queue } = this.state;
        obj.keyGrowth = keyGrowth++;
        queue.push(obj);
        this.setState({queue},()=>{
            setTimeout(()=>{
                this.popQueue(obj);
            },3000)
        });
    }
    popQueue(obj){
        let { queue } = this.state;
        let newQueue = queue.filter((item ) => item !== obj );
        this.setState({queue:newQueue});
    }
    render(){
        const { queue } = this.state;
        return (
            <div>{
                queue.map((obj)=>{
                    return (
                        <Notification key={obj.keyGrowth} type={obj.type} msg={obj.msg} />
                    );
                })
            }</div>
        )
    }
}

if(!document.getElementById('notification-container')){
    let div = document.createElement('div');
    div.setAttribute('id','notification-container');
    document.body.appendChild(div);
}
let notificationQueue;
ReactDOM.render(<NotificationQueue ref={(ref)=>{ notificationQueue = ref }} />, document.getElementById('notification-container'));

export const danger = (msg) => {
    notificationQueue.pushQueue({msg,type:'danger'})
};

export const success = (msg) => {
    notificationQueue.pushQueue({msg,type:'success'})

};

export const warning = (msg) => {
    notificationQueue.pushQueue({msg,type:'warning'})

};

export const info = (msg,fn)=>{
    notificationQueue.pushQueue({msg,type:'info'})
};

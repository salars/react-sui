import React, { Component } from 'react';
import PropTypes from 'prop-types';
import close from './close_notice.png';
import success from './success_notice.png';
import { composeTheme,getColorByType } from '../helpers';
import { autobind } from 'core-decorators';
import ReactDOM from 'react-dom';


@autobind
class Notice extends Component {
    static props = {
        type: PropTypes.string,
        msg: PropTypes.string,
        timer: PropTypes.string,
        title: PropTypes.string,
        clickNotice:PropTypes.func,
        ins: PropTypes.number,
    };
    static defaultProps = {
        type: 'info',
        msg: '',
        title: '',
        timer: ''
    };
    state = {
        flag: true,
    };
    componentDidMount(){

    }
    render(){
        const { type, msg, title, timer, clickNotice, ins } = this.props;
        return (
           <div className='notice'>
               <div className={ 'notice-fade-in-active notice-alert notice-type-' + type }>
                   <div className='notice-title clearfix'>
                    <span className='notice-success-close'>
                        <img width='100%' height='100%' src={success} alt=""/>
                    </span>
                       <span className='notice-title-text'> {title} </span>
                       <span className='notice-time'> {timer} </span>
                       <span className='notice-success-title' onClick={_=>{ clickNotice(ins) }}>
                            <img width='100%' height='100%' src={close} alt=""/>
                       </span>
                   </div>
                  <div className='notice-content'>
                      { msg }
                  </div>
               </div>
           </div>
        )
    }
}
let keyGrowth = 0;
class NoticeQueue extends Component {
    state = {
        queue:[],
    };
    pushQueue(obj){
        let { queue, arrIndex } = this.state;
        obj.keyGrowth = keyGrowth++;
        queue.push(obj);
        this.setState({queue});
    }
    popQueue(index){
        let { queue } = this.state;
        queue[index]=null;
        this.setState({queue});
    }

    render(){
        const { queue } = this.state;
        return (
            <div >
                {
                    queue.map((obj)=>{
                         if(obj!=null) return(
                            <Notice key={obj.keyGrowth} ins={obj.keyGrowth}
                                    type={obj.type} msg={obj.msg}
                                    timer={obj.time} title={obj.title}
                                    clickNotice={(index) =>{ this.popQueue(index) }}  />
                         );
                         return;
                    })

                }
            </div>
        )
    }
}

if(!document.getElementById('notice-container')){
    let div = document.createElement('div');
    div.setAttribute('id','notice-container');
    document.body.appendChild(div);
}
let noticeQueue;
ReactDOM.render(<NoticeQueue ref={(ref)=>{ noticeQueue = ref }} />, document.getElementById('notice-container'));

export const noticeSuccess = (msg, obj) => {
    noticeQueue.pushQueue(Object.assign({}, {msg,type:'success'}, (obj==null? {}:obj)))

};

export const noticeWarning = (msg, obj) => {
    noticeQueue.pushQueue(Object.assign({}, {msg,type:'warning'}, (obj==null? {}:obj)))

};

export const noticeInfo = (msg,obj)=>{
    noticeQueue.pushQueue(Object.assign({}, {msg,type:'info'}, (obj==null? {}:obj)))
};

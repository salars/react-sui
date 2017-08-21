import React from 'react'
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './style.less';
export class Modal extends React.Component {
    constructor() {
        super();
    }

    fnClose() {
        this.props.setShow(false);
    }

    render() {
        const {buttons, msg, type,children} = this.props;
        const fnClose = this.fnClose.bind(this);
        const {show} = this.props;
        return (
            show ?
                <div className={"modal-container " + (type ? type : "")}>
                    <div className="mask" onClick={fnClose}></div>
                    <div className="modal-wrapper">
                        <div className="modal-msg">{ msg||children }</div>
                        {
                            buttons.length?
                                <ul className="button-container">{ buttons.map(({text, action,className}, idx) => {
                                    return <li onClick={ _ => {
                                action && action(fnClose)
                            } } key={idx} className={ className || "" }>{text}</li>
                                }) }</ul>
                                :
                                null
                        }
                    </div>
                </div>
                :
                null
        )
    }
}
Modal.props = {
    msg: PropTypes.string.isRequired,
    buttons: PropTypes.array,
    type: PropTypes.string,
    show: PropTypes.bool,
};

Modal.defaultProps = {
    buttons: [{
        text: "确定", action(fnClose){
            fnClose && fnClose();
        }
    }]
};

let node = document.getElementById('modal-container');
if (!node) {
    node = document.createElement("div");
    node.setAttribute("id", "modal-container");
    document.body.appendChild(node);
}
export const notif = (msg, type, buttons) => {
    let show = true;
    if(msg === false){
        show = false;
    }
    console.log(show);
    const render = () => {
        ReactDOM.render(<Modal show={ show } msg={msg} type={ type } buttons={ buttons } setShow={
            flag => {
                show = flag;
                render()
            }
        }/>, node);
    };
    render();
};
export const hideModal = () => {
    console.log("bbbbbbb");
      notif(false);
};
export const error = (msg) => {
    notif(msg, 'error');
};

export const success = (msg) => {
    notif(msg, 'success');
};

export const warning = (msg) => {
    notif(msg, 'warning');
};

export const info = (msg,fn)=>{
    notif(msg, 'info', [
        {
            text: "确定",
            action(fnClose){
                fn && fn(fnClose);
            }
        }
    ]);
};
export const confirm = (msg, fn) => {
    notif(msg, 'confirm', [
        {
            text: "确定",
            action(fnClose){
                fn && fn(fnClose);
            }
        },
        {
            text: "取消",
            className:"bordered",
            action(fnClose){
                fnClose && fnClose();
            }
        }
    ]);
};

import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {composeTheme} from '../helpers';
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';

@autobind
class PopUp extends Component {
    static props = {
        msg: PropTypes.string.isRequired,
        buttons: PropTypes.array,
        type: PropTypes.string,
        show: PropTypes.bool
    };
    static defaultProps = {
        type: "default",
        text: "",
        title: ""
    };

    fnClose() {
        this.props.setShow(false);
    }

    render() {
        const {msg, show, buttons, title} = this.props;
        return (
            show ? (
                <div className="popup-block">
                    <div className="modal-backdrop show">
                        <div className="modal fade show" id="exampleModal" tabIndex="-1" role="dialog"
                             aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">{title}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true" onClick={this.fnClose}>x</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        {msg}
                                    </div>
                                    <div className="modal-footer">
                                        {
                                            buttons &&  buttons.length ? buttons.map(({text, action, className}, idx) => {
                                                    return <button type="button"
                                                                   data-dismiss="modal"
                                                                   onClick={_ => {
                                                                       action && action(this.fnClose)
                                                                   }}
                                                                   key={idx}
                                                                   className={className || "btn btn-primary"}>{text}</button>
                                                })
                                                :
                                                null
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                )
                :
                null
        )
    }
}

let node = document.getElementById('modal-container');
if (!node) {
    node = document.createElement("div");
    node.setAttribute("id", "modal-container");
    document.body.appendChild(node);
}

export const notif = (msg, title, buttons) => {
    let show = true;
    if (msg === false) {
        show = false;
    }
    const render = () => {
        ReactDOM.render(<PopUp show={show} msg={msg} title={title} buttons={buttons} setShow={
            flag => {
                show = flag;
                render()
            }
        }/>, node);
    };
    render();
};

export const hideModal = () => {
    notif(false);
};
export const error = (msg) => {
    notif(msg, '错误');
};

export const success = (msg) => {
    notif(msg, '成功');
};

export const warning = (msg) => {
    notif(msg, '警告');
};

export const info = (msg, fn) => {
    notif(msg, '通知', [
        {
            text: "确定",
            action(fnClose) {
                fn && fn(fnClose);
            }
        }
    ]);
};
export const confirm = (msg, fn) => {
    notif(msg, '提示信息', [
        {
            text: "确定",
            action(fnClose) {
                fn && fn(fnClose);
            }
        },
        {
            text: "取消",
            className: "btn btn-secondary",
            action(fnClose) {
                fnClose && fnClose();
            }
        }
    ]);
};

//
//
//
export default composeTheme(PopUp);
import React, {Component} from 'react';
import {composeTheme} from '../helpers';
import PropTypes from 'prop-types';
import {autobind} from 'core-decorators';
import ReactDOM from 'react-dom';

@autobind
class Collapse extends Component {

    state = {
        listMsg: [],
    };

    static props = {
        msgs: []
    };

    handleShow(e,idx) {
        const {listMsg} = this.state;
        e.preventDefault();
        listMsg[idx].showStatus = !listMsg[idx].showStatus;
        this.setState({listMsg: listMsg});
    }

    getClassName(idx) {
        const {listMsg} = this.state;
        return listMsg[idx].showStatus ? "show" : "collapse";
    }

    componentWillMount (){
        const { msgs } = this.props
        msgs.map((item)=>{
            if(typeof item.showStatus != "boolean"){
                item.showStatus=false;
            }
            return item;
        });
        this.setState({listMsg: msgs});
    }

    render() {
        const {listMsg, calHeight} = this.state;
        return (
            <div className="tablist">
                <div id="accordion">
                    {
                        listMsg.length>0? (listMsg.map((item, index) => {
                            return <div className="card" key={index}>
                                <div className="card-header">
                                    <h5 className="mb-0">
                                        <a data-toggle="collapse" href="#awd" onClick={(e)=>{ this.handleShow(e,index) }}>
                                            {item.title}
                                        </a>
                                    </h5>
                                </div>
                                <div id="collapseOne" className={this.getClassName(index)} >
                                    <div className="card-body">
                                        {item.info}
                                    </div>
                                </div>
                            </div>
                        })) : null
                    }

                </div>
            </div>

        );
    }
}

export default composeTheme(Collapse);
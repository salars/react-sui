import React from 'react';
import "./style.less";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions';
import Home from '../Home';
import Demo from '../Demo';
import { Route } from 'react-router';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Route path="/" component={ Home } exact/>
                <Route path="/home" component={ Home } />
                <Route path="/demo" component={ Demo } />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return state.appReducers.toJS();
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

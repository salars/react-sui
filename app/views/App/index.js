import React from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as actionCreators from './actions';
import Home from '../Home';
import { Route } from 'react-router';

export class App extends React.Component {
    render() {
        return (
            <div>
                <Route path="/" component={ Home } exact/>
                <Route path="/home" component={ Home } />
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

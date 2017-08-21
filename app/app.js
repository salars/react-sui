import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/createBrowserHistory';
//import injectTapEventPlugin from 'react-tap-event-plugin';
import "./css/style.less";
import {Provider} from 'react-redux';
import {ConnectedRouter, routerMiddleware} from 'react-router-redux';
import {Route} from 'react-router';
import App from 'views/App';
import store from './store';

//injectTapEventPlugin();

export const browserHistory = createBrowserHistory();
export const middleware = routerMiddleware(browserHistory);

class MainApp extends React.Component {
    render() {
        return (
            <Provider store={ store }>
                <ConnectedRouter history={ browserHistory }>
                    <Route path="/" component={App}/>
                </ConnectedRouter>
            </Provider>
        )
    }
}

ReactDOM.render(<MainApp />, document.getElementById("app"));

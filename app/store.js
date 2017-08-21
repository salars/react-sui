import { applyMiddleware,createStore,combineReducers } from 'redux';
import { appReducers } from 'views/App/reducers';
import thunkMiddleware from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import { middleware } from './app';
const rootReducer = combineReducers({
    appReducers,
    routing:routerReducer,
});
export default createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunkMiddleware),
    applyMiddleware(middleware)
);

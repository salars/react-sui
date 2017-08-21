import {fromJS} from 'immutable';

const initialState = fromJS({
    loading: false,
});
const reducers = {
    SET_LOADING(state,{loading}){
        return state.set('loading',loading);
    }
};
export const appReducers = (state = initialState, {type, param}) => {
    if (reducers[type]) {
        return reducers[type](state, param);
    } else {
        return state;
    }
};
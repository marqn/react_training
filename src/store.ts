import {combineReducers, createStore} from 'redux';

import {counter, counterState} from './reducers/counterReducer';

export interface State {
    counter: counterState,
}

const reducer = combineReducers<State>({
    counter
});

export const store = createStore<State>(reducer);


window['store'] = store;
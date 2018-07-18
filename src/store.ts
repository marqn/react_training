import {combineReducers, createStore} from 'redux';

import {counter, counterState} from './reducers/counterReducer';

export interface State {
    counter: counterState,
}

const reducers = combineReducers<State>({
    // wywoływane gry rozgłaszamy akcję
    counter
});

export const store = createStore<State>(reducers);


window['store'] = store;
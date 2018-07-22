import {combineReducers, createStore} from 'redux';

import {counter, counterState} from './reducers/counterReducer';
import {CategoriesState, categoryReducer} from './reducers/categoriesReducer';

export interface State {
    counter: counterState,
    categoryItems:CategoriesState
}

const reducers = combineReducers<State>({
    // wywoływane gry rozgłaszamy akcję
    counter,
    categoryReducer
});

export const store = createStore<State>(reducers);


window['store'] = store;
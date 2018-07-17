import {CategoryVO} from "../vo/CategoryVO";
import {Reducer} from "redux";
import axios from "axios";


export interface CategoriesState {
    categories: CategoryVO[]
}

export const initialCategories = {
    categories: []
};

export const categoriesReducer: Reducer<CategoriesState> = (state = initialCategories, action: ActionTypes) => {

    switch (action.type) {
        case 'START_LOAD_CATEGORIES': return {
            ...state
            // loading: true
        }
        case 'LOAD_CATEGORIES':
            return {
                ...state,
                categories: action.payload
            };
        default:
            return state;
    }
};

type ActionTypes = LOAD_CATEGORIES | START_LOAD_CATEGORIES | DELETE_TODO;

interface LOAD_CATEGORIES {
    type: 'LOAD_CATEGORIES',
    payload: CategoryVO[]
}
interface START_LOAD_CATEGORIES {
    type: 'START_LOAD_CATEGORIES'
}

interface DELETE_TODO {
    type: 'DELETE_TODO',
    payload: CategoryVO['id']
}

/*
export const deleteTodo: ActionCreator<DELETE_TODO> = (id: CategoryVO['id']) => ({
    type: 'DELETE_TODO', payload: id
});
*/

export const loadCategories = () => (dispatch:Function) => {

    axios.get("http://localhost:9000/categories/")
        .then(response => {
            dispatch({
                type: 'LOAD_CATEGORIES', payload: response.data
            });
        });
};

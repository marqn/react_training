import {CategoryVO} from "../vo/CategoryVO";
import {Reducer} from "redux";

export interface CategoriesState {
    items: CategoryVO[]
}

const initialCategories:CategoriesState = {
    items:[]
};

type CategoryActions = LOAD_CATEGORIES | START_LOAD_CATEGORIES

interface LOAD_CATEGORIES {
    type: 'LOAD_CATEGORIES',
    payload: CategoryVO[]
}

interface START_LOAD_CATEGORIES {
    type: 'START_LOAD_CATEGORIES'
}

export const categoryReducer: Reducer<CategoriesState> = (state = initialCategories, action: CategoryActions) => {
    switch (action.type) {
        case 'START_LOAD_CATEGORIES':
            return {
                ...state
            }
        case 'LOAD_CATEGORIES':
            return {
                ...state,
                items: action.payload
            };
        default:
            return state;
    }
};

export const loadCategories = () => {
    console.log('load categories');

    return({
        type:'START_LOAD_CATEGORIES'
    })
};
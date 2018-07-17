import {ActionCreator, Reducer} from "redux";

export type counterState = number
export const initialCounter = 666;

interface INC {
    type: 'INC',
    payload: number
}

interface DEC {
    type: 'DEC',
    payload: number
}

type CounterActions = INC | DEC

export const inc: ActionCreator<INC> = (payload: number) => ({
    type: 'INC', payload
});

export const dec: ActionCreator<DEC> = (payload: number) => ({
    type: 'DEC', payload
});

export const counter: Reducer<number> = (state = initialCounter, action: CounterActions) => {
    console.log('type:' + action.type + '  state:' + state + '  payload:' + action.payload);
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        default:
            return state;
    }
};
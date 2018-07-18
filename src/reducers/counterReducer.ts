import {ActionCreator, Reducer} from "redux";

export type counterState = number
export const initialCounter = 666;

interface INC {
    type: 'INC'
}

interface DEC {
    type: 'DEC'
}

interface RESET {
    type: 'RESET'
}

interface SET_0 {
    type: 'SET_0',
    payload:number
}

type CounterActions = INC | DEC | RESET | SET_0

export const inc: ActionCreator<INC> = () => ({
    type: 'INC'
});

export const dec: ActionCreator<DEC> = () => ({
    type: 'DEC'
});

export const reset: ActionCreator<RESET> = () => ({
    type: 'RESET'
});

export const set_0: ActionCreator<SET_0> = (value:number) => ({
    type:'SET_0', payload:value
})

export const counter: Reducer<number> = (state = initialCounter, action: CounterActions) => {
    console.log('type:' + action.type + '  state:' + state);
    switch (action.type) {
        case 'INC':
            return state + 1;
        case 'DEC':
            return state - 1;
        case 'RESET':
            return initialCounter;
        case 'SET_0':
            return action.payload;
        default:
            return state;
    }
};
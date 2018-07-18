import {connect} from 'react-redux';
import { State } from '../store';
import { Dispatch } from 'redux';
import {inc, dec, reset, set_0} from '../reducers/counterReducer';
import {Counter} from "../components/Counter";


const mapStateToProps = (state: State) => ({
    count: state.counter
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    increment() {
        dispatch(inc())
    },
    decrement() {
        dispatch(dec())
    },
    reset() {
        dispatch(reset())
    },
    set_0(value:number) {
        dispatch(set_0(value))
    }

});


export const CurrentCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

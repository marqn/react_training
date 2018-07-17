import {connect} from 'react-redux';
import { State } from '../store';
import { Dispatch } from 'redux';
import {inc, dec} from '../reducers/counterReducer';
import {Counter} from "../components/Counter";


const mapStateToProps = (state: State) => ({
    count:0
});

const mapDispatchToProps = (dispatch: Dispatch<State>) => ({
    increment() {
        dispatch(inc())
    },
    decrement() {
        dispatch(dec())
    }
});


export const CurrentCounter = connect(
    mapStateToProps,
    mapDispatchToProps
)(Counter);

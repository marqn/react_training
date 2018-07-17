import * as React from "react";


interface State {
    count: number
}

interface Props {
    count: number,
    increment: () => any,
    decrement: () => any
}

export class Counter extends React.PureComponent<Props, State> {

    state: State = {
        count: 0
    };

    onIncrement() {
        this.props.increment();
        this.setState({count: 1});
    }
    onDecrement() {
        this.props.increment();
        this.setState({count: 2});
    }

    render() {
        return <div>
            <p>
                Clicked: {this.state.count}
                <button onClick={e => this.onIncrement()}>+</button>
                <button onClick={e => this.onDecrement()}>-</button>
            </p>
        </div>
    }
}
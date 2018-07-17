import * as React from "react";

interface Props {
    count: number,
    increment: () => any,
    decrement: () => any
}

export class Counter extends React.Component<Props> {

      onIncrement() {
        this.props.increment();
    }

    onDecrement() {
        this.props.decrement();
    }

    render() {
        return <div>

            <p>this.props.count: {this.props.count} </p>
            <button onClick={e => this.onIncrement()}>+</button>
            <button onClick={e => this.onDecrement()}>-</button>

        </div>
    }
}
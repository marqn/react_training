import * as React from "react";
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';

interface Props {
    count: number,
    increment: () => any,
    decrement: () => any,
    reset: () => any,
    set_0: (value: number) => any
}

export class Counter extends React.Component<Props> {

    onIncrement() {
        this.props.increment();
    }

    onDecrement() {
        this.props.decrement();
    }

    onSet_0() {
        this.props.set_0(0);
    }

    render() {
        return <div>

            <Card>
                <CardContent>
                    <Typography variant="headline" component="h2" color="textSecondary">
                        this.props.count: {this.props.count}
                    </Typography>
                </CardContent>
            </Card>

            <Button variant="contained" color="primary" onClick={e => this.onIncrement()}>+</Button>
            <span style={{margin: 10}}/>
            <Button variant="contained" color="primary" onClick={e => this.onDecrement()}>-</Button>
            <span style={{margin: 10}}/>
            <Button variant="contained" color="primary" onClick={e => this.props.reset()}>reset</Button>
            <span style={{margin: 10}}/>
            <Button variant="contained" color="primary" onClick={e => this.onSet_0()}>set 0</Button>

        </div>
    }
}
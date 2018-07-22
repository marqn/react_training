import * as React from "react";
import {CurrentCounter} from "./CounterMap";
import {CategoryMap} from "./CategoryMap";

interface State {

}

interface Props {
    text: string
}

export class HomePage extends React.Component<Props, State> {

    static defaultProps = {
        text: 'Page'
    };

    render() {

        return <div>
            <p>Home: {this.props.text}</p>
            <CurrentCounter />

            <CategoryMap />
        </div>
    }
}
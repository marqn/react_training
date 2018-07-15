import * as React from "react";

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
        </div>
    }
}
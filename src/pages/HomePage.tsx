import * as React from "react";

interface State {

}

interface Props {
    txt?: string
}

export class HomePage extends React.Component<Props, State> {

    static defaultProps = {
        text: 'hey'
    }

    render() {

        return <div>
            <p>Home {this.props.txt}</p>
        </div>
    }
}
import * as React from "react";
import { WordItem } from "../WordItem"

interface State {
    words: WordItem[]
}

interface Props {
    txt?: string
}

export class WordManagerPage extends React.Component<Props, State> {

    static defaultProps = {
        txt: 'WordManagerPage'
    }

    render() {

        return <div>
            <p>{this.props.txt}</p>
        </div>
    }
}
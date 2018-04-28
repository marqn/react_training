import * as React from "react";
import { WordItemVO } from "../vo/WordItemVO";

interface State {

}

interface Props {
    words: WordItemVO[]
}

export class WordList extends React.Component<Props, State> {



    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.props.words.map((word, index) =>
                        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                            <small>{word.txt1}</small>
                            <small>{word.txt2}</small>
                            <span className="badge badge-primary badge-pill">{word.addedDate}</span>
                        </li>
                    )}

                </ul>
            </div>
        );
    }
}
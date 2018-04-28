import * as React from "react";
import { WordItemVO } from "../vo/WordItemVO";
import axios from "axios";

interface State {

}

interface Props {
    words: WordItemVO[],
    reloadWords?: () => void
}

export class WordList extends React.Component<Props, State> {

    saveWord = (word: WordItemVO) => {
        axios.put<WordItemVO>("http://localhost:9000/words/" + word.id, word)
            .then(response => {
                return this.props.reloadWords
            })
    }

    onSave = () => {
        let word: WordItemVO = {
            id: Date.now(),
            txt1:'text 1',
            txt2:'text 2',
            category: 1,
            addedDate: Date.now()
       }
       this.saveWord(word);
    }


    newWordLI = <li className="list-group-item d-flex justify-content-between align-items-center">
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="txt 1" aria-label="Recipient's username" aria-describedby="basic-addon2" />
        </div>
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="txt 2" aria-label="Recipient's username" aria-describedby="basic-addon2" />
            <div className="input-group-append">
                <button
                    className="btn btn-outline-secondary"
                    type="button" onClick={this.onSave}>
                    Zapisz
                 </button>
            </div>
        </div>
    </li>;

    render() {
        return (
            <div>
                <ul className="list-group">
                    {this.newWordLI}

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
import * as React from "react";
import { WordItemVO } from "../vo/WordItemVO";
import axios from "axios";

interface State {
    txt1: string,
    txt2: string,
    disabledBtn: boolean
}

interface Props {
    words: WordItemVO[],
    reloadWords?: () => void
}

export class WordList extends React.Component<Props, State> {

    state: State = {
        txt1: '',
        txt2: '',
        disabledBtn: true
    }

    constructor(props: Props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    saveWord = (word: WordItemVO) => {
        axios.post<WordItemVO>("http://localhost:9000/words/" + word.id, word)
            .then(response => {
                this.props.reloadWords && this.props.reloadWords()
                this.setState({
                    txt1:"",
                    txt2:"",
                    disabledBtn:true
                })
            })
    }

    onSave = () => {
        let word: WordItemVO = {
            id: 6,
            txt1: this.state.txt1,
            txt2: this.state.txt2,
            category: 1,
            addedDate: Date.now()
        }
        this.saveWord(word);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const elem = event.target
        const fieldName = elem.name
        const fieldValue = elem.value

        this.setState({
            [fieldName]: fieldValue
        } as any)

        if (this.state.txt2.length > 0 && this.state.txt2.length > 0) {
            this.setState({ disabledBtn: false })
        }

        console.log('disabledBtn: ' + this.state.disabledBtn)
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                        <div className="input-group mb-3">
                            <input type="text"

                                name="txt1"
                                className="form-control"
                                placeholder="Insert first word"
                                onChange={this.handleChange} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text"
                                name="txt2"
                                className="form-control"
                                placeholder="Insert second word"
                                onChange={this.handleChange} />
                            <div className="input-group-append">
                                <button disabled={this.state.disabledBtn}
                                    className="btn btn-success"
                                    type="button" onClick={this.onSave}>
                                    Zapisz
                 </button>
                            </div>
                        </div>
                    </li>

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
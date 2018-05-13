import * as React from "react";
import {WordItemVO} from "../../../vo/WordItemVO";
import axios from "axios";
import {WordItemList} from "./WordItemList";

interface State {
    word: WordItemVO,
    disabledBtn: boolean
}

interface Props {
    words: WordItemVO[],
    reloadWords?: () => void
}

export class WordList extends React.Component<Props, State> {

    state: State = {
        word: {
            txt1: "",
            txt2: "",
            addedDate: Date.now(),
            category: 1,
            id: Date.now()
        },
        disabledBtn: true
    }
    saveWord = (word: WordItemVO) => {
        word.id = Date.now()
        axios.post<WordItemVO>("http://localhost:9000/words/", word)
            .then(response => {
                this.props.reloadWords && this.props.reloadWords()
                word.txt1 = ''
                word.txt2 = ''
                this.setState({word, disabledBtn: true});
            })
    }
    onSave = () => {
        this.saveWord(this.state.word);
    }
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const elem = event.target,
            fieldName = elem.name,
            fieldValue = elem.value;

        this.setState(prevState => ({
            word: {
                ...prevState.word,
                [fieldName]: fieldValue
            }
        }))

        if (this.state.word.txt1.length > 0 && this.state.word.txt2.length > 0)
            this.setState({disabledBtn: false})
    }
    selectWordItem = (word: WordItemVO) => {
        this.setState({word:word});
    }

    constructor(props: Props) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                        <div className="input-group mb-3">
                            <input type="text"
                                   value={this.state.word.txt1}
                                   name="txt1"
                                   className="form-control"
                                   placeholder="Insert first word"
                                   onChange={this.handleChange}/>
                        </div>
                        <div className="input-group mb-3">
                            <input type="text"
                                   value={this.state.word.txt2}
                                   name="txt2"
                                   className="form-control"
                                   placeholder="Insert second word"
                                   onChange={this.handleChange}/>
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
                        <span key={index} onClick={e => this.selectWordItem(word)}>
                            <WordItemList word={word}/>
                        </span>
                    )}
                </ul>
            </div>
        );
    }
}
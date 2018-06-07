import * as React from "react";
import {WordItemVO} from "../../vo/WordItemVO";
import axios from "axios";
import {WordItemList} from "./WordItemList";
import {NavLink} from "react-router-dom";

interface State {
    word: WordItemVO,
    disabledBtn: boolean,
    editMode: boolean
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
            id: Date.now(),
            selected: false
        },
        disabledBtn: true,
        editMode: false
    };

    saveWord = (word: WordItemVO) => {
        word.id = Date.now();
        word.addedDate = Date.now();
        word.selected = false;
        axios.post<WordItemVO>("http://localhost:9000/words/", word)
            .then(response => {
                this.props.reloadWords && this.props.reloadWords();
                word.txt1 = '';
                word.txt2 = '';
                this.setState({word, disabledBtn: true});
            })
    };

    onSave = () => {
        this.saveWord(this.state.word);
    };

    onDelete = () => {
        axios.delete("http://localhost:9000/words/" + this.state.word.id)
            .then(response => {
                this.props.reloadWords && this.props.reloadWords();
                let word: WordItemVO = {
                    txt1: '',
                    txt2: '',
                    id: 0,
                    addedDate: 0,
                    category: 0,
                    selected: false
                };
                this.setState({word: word, editMode: false, disabledBtn: true});
            })
    };
    onUpdate = () => {
        this.state.word.addedDate = Date.now();
        this.state.word.selected = false;

        axios.put("http://localhost:9000/words/" + this.state.word.id, this.state.word)
            .then(response => {
                this.props.reloadWords && this.props.reloadWords();
                let word: WordItemVO = {
                    txt1: '',
                    txt2: '',
                    id: 0,
                    addedDate: 0,
                    category: 0,
                    selected: false
                };
                this.setState({word: word, editMode: false, disabledBtn: true});
            })
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const elem = event.target,
            fieldName = elem.name,
            fieldValue = elem.value;

        this.setState(prevState => ({
            word: {
                ...prevState.word,
                [fieldName]: fieldValue
            }
        }));

        if (this.state.word.txt1.length > 0 && this.state.word.txt2.length > 0)
            this.setState({disabledBtn: false})
    };

    unselectWordItems = () => {
        this.props.words.map(word => {
            word.selected = false;
        });
    }

    selectWordItem = (_word: WordItemVO) => {
        this.unselectWordItems();
        _word.selected = true;
        this.setState({word: _word, editMode: true});
        ;
    };

    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                            <select style={{textAlignLast:'center'}} className="form-control mb-2" placeholder="select category">
                                <option value="" disabled selected hidden>Select category</option>
                                <option>Trudne</option>
                                <option>Łatwe</option>
                                <option>Stare</option>
                            </select>
                        <NavLink to="/categorypage" className="btn btn-success mb-2">Dodaj/Usuń kategorię</NavLink>
                    </li>
                    <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                        <input type="text"
                               value={this.state.word.txt1}
                               name="txt1"
                               className="mb-2 input-group form-control"
                               placeholder="Insert first word"
                               onChange={this.handleChange}/>
                        <input type="text"
                               value={this.state.word.txt2}
                               name="txt2"
                               className="mb-2 input-group form-control"
                               placeholder="Insert second word"
                               onChange={this.handleChange}/>
                        {!this.state.editMode ?
                            <button disabled={this.state.disabledBtn}
                                    className="mb-2 input-group-append btn btn-success"
                                    type="button" onClick={this.onSave}> Zapisz
                            </button>
                            :

                            <button className="mb-2 input-group-append btn btn-warning"
                                    type="button" onClick={this.onUpdate}> Aktualizuj
                            </button>
                        }
                        <button disabled={!this.state.editMode}
                                className="mb-2 input-group-append btn btn-danger"
                                type="button" onClick={this.onDelete}>Usuń
                        </button>
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
import * as React from "react";
import {WordItemVO} from "../../vo/WordItemVO";
import {WordList} from "./WordList";
import axios from 'axios';
import {NavLink} from "react-router-dom";

interface State {
    words: WordItemVO[]
}

interface Props {
    txt: string
}


export class WordManagerPage extends React.Component<Props, State> {

    state: State = {
        words: []
    }

    fetchWords = () => {
        axios.get<WordItemVO[]>("http://localhost:9000/words")
            .then(response => {
                this.setState({
                    words: response.data
                })
            })
    };

    reload = () => {
        this.fetchWords();
    };

    componentDidMount() {
        this.fetchWords();
    }

    render() {

        return <div>
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
                </ul>
                <WordList words={this.state.words} reloadWords={this.reload}/>
            </div>
        </div>
    }
}
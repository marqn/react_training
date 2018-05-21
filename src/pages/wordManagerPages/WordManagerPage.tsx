import * as React from "react";
import {WordItemVO} from "../../vo/WordItemVO";
import {WordList} from "./WordList";
import axios from 'axios';

interface State {
    words: WordItemVO[]
    word?: WordItemVO
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
    }

    reload = () => {
        this.fetchWords();
    }

    componentDidMount() {
        this.fetchWords();
    }

    render() {

        return <div>
            <div className="row">
                <div className="col-1"></div>
                <div className=" col-4 jumbotron btn">
                    <h2>Input categories</h2>
                </div>
                <div className="col-2"></div>
                <div className="col-4 jumbotron btn">
                    <h2>Input words</h2>
                </div>
                <div className="col-1"></div>
            </div>
            <WordList words={this.state.words} reloadWords={this.reload}/>
        </div>
    }
}
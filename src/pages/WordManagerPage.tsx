import * as React from "react";
import {WordItemVO} from "../vo/WordItemVO";
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
        console.log(Math.random());
        this.fetchWords();
    }

    componentDidMount() {
        this.fetchWords();
    }

    render() {

        return <div>
            <WordList words={this.state.words} reloadWords={this.reload}/>
        </div>
    }
}
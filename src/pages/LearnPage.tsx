import * as React from "react";
import { WordItemVO } from "../vo/WordItemVO";
import axios from "axios";
import { ButtonComponent } from "./learn/ButtonComponent";


interface State {
    txt1_hidden: boolean,
    word: WordItemVO,
    words:WordItemVO[]
}

export class LearnPage extends React.Component<{}, State> {

    constructor(p:any) {
        super(p);
    }

    index = 1;

    componentDidMount() {
        this.getWords();
    }

    getWords = () => {
        axios.get("http://localhost:9000/words/")
            .then(response => {
                this.setState({words: response.data, word: response.data[0]});
                console.log(this.state.word);
            });
    };

    nextWord = () => {
        let nextWord = this.state.words[this.index];
        this.index++;
        if(this.index >= this.state.words.length) {
            console.log("koniec");
            this.index = this.state.words.length-1;
        }
        this.setState({word: nextWord});
    };

    wiem = () => {
        this.setState({txt1_hidden: false});
        this.nextWord();
    };

    niewiem = () => {
        this.setState({txt1_hidden: false});
        this.nextWord();
    };

    sprawdz = () => {
        this.setState({txt1_hidden: true});
    };

    render() {

        return <div>
            {this.state ? this.state.txt1_hidden ? <h2>{this.state.word.txt1}</h2>: <h2>****</h2>:' '}

            <h2>{this.state ? this.state.word.txt2 : ' '}</h2>
            <ButtonComponent wiem={this.wiem} niewiem={this.niewiem} sprawdz={this.sprawdz} />
        </div>
    }
}
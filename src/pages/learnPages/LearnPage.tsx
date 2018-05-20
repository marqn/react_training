import * as React from "react";
import {WordItemVO} from "../../vo/WordItemVO";
import axios from "axios";
import {ButtonComponent} from "./ButtonComponent";


interface State {
    txt1_hidden: boolean,
    isFinish: boolean,
    word: WordItemVO,
    words: WordItemVO[],
    typeOfGame: {}
}

export class LearnPage extends React.Component<{}, State> {

    state: State = {
        isFinish: false,
        txt1_hidden: false,
        typeOfGame: {},
        word: {} as WordItemVO,
        words: []
    };


    constructor(p: any) {
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
            });
    };

    nextWord = () => {
        let nextWord = this.state.words[this.index];
        this.index++;
        if (this.index > this.state.words.length) {
            this.setState({isFinish: true});
        } else
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

            {this.state.isFinish ? <div className="jumbotron">
                <h1 className="display-4">Koniec</h1>
                <p className="lead">Podsumowanie:</p>
                <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
            </div>
                :
                <div>
                {this.state ? this.state.txt1_hidden ? <h2>{this.state.word.txt1}</h2> : <h2>****</h2> : ' '}

                <h2>{this.state ? this.state.word.txt2 : ' '}</h2>
                </div>
                }
            <ButtonComponent finish={this.state.isFinish} wiem={this.wiem} niewiem={this.niewiem}
                             sprawdz={this.sprawdz}/>
        </div>
    }
}
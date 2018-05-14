import * as React from "react";
import {WordItemVO} from "../vo/WordItemVO";
import axios from "axios";
import {ButtonComponent} from "./learn/ButtonComponent";


interface State {
    txt1_hidden: boolean,
    words: WordItemVO[]
}

export class LearnPage extends React.Component<{}, State> {

    constructor(p: any) {
        super(p)
    }

    index = 1;

    componentDidMount() {
        this.getWords();
    }

    getWord = (index: number) => {
        axios.get<WordItemVO>("http://localhost:9000/words/" + index)
            .then(response => {
                // this.setState({words: response.data});
            })
    };

    getWords = () => {
        axios.get("http://localhost:9000/words/")
            .then(response => {
                this.setState({words: response.data});
                console.log(response.data);
            })
    };

    wiem = () => {
        this.setState({txt1_hidden: false});
        this.getWord(++this.index);
    };

    niewiem = () => {
        this.setState({txt1_hidden: false});
        this.getWord(++this.index);
    };

    sprawdz = () => {
        this.setState({txt1_hidden: true})
    };

    render() {

        return <div>
            {/*{this.state ? this.state.txt1_hidden ? <h2>{this.state.word.txt1}</h2> : <h2>****</h2> : ' '}*/}

            {/*<h2>{this.state ? this.state.word.txt2 : ' '}</h2>*/}
            <ButtonComponent wiem={this.wiem} niewiem={this.niewiem} sprawdz={this.sprawdz}/>
        </div>
    }
}
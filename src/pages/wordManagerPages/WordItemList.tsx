import * as React from "react";
import {WordItemVO} from "../../vo/WordItemVO";


interface State {
    word: WordItemVO
}

interface Props {
    word: WordItemVO,
    index?: number
}

export class WordItemList extends React.Component<Props, State> {

    reformatDate = (date: number) => {
        let d = new Date(date);
        return d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
            d.getHours() + ":" + d.getMinutes();
    }

    render() {
        return (
            <li key={this.props.index}
                className={this.props.word.selected ? 'active list-group-item d-flex justify-content-between align-items-center' : 'list-group-item d-flex justify-content-between align-items-center'}>
                <small>{this.props.word.txt1}</small>
                <small>{this.props.word.txt2}</small>
                <span className="badge badge-primary badge-pill">{this.reformatDate(this.props.word.addedDate)}</span>
            </li>
        )
    }

}

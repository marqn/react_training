import * as React from "react";

interface State {
    sprawdzMode: boolean
}

interface Props {
    wiem: () => void,
    niewiem: () => void,
    sprawdz: () => void,
    finish: boolean
}

export class ButtonComponent extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            sprawdzMode: false
        }
    }

    onSprawdz = () => {
        this.props.sprawdz();
        this.state.sprawdzMode ? this.setState({sprawdzMode: false}) : this.setState({sprawdzMode: true})
    };

    componentDidMount() {
        this.setState({sprawdzMode: false})
    }

    onWiem = () => {
        this.props.wiem();
        this.state.sprawdzMode ? this.setState({sprawdzMode: false}) : this.setState({sprawdzMode: true})
    };


    onNieWiem = () => {
        this.props.niewiem();
        this.state.sprawdzMode ? this.setState({sprawdzMode: false}) : this.setState({sprawdzMode: true})
    }

    render() {
        return <div>
            {
                !this.props.finish ?
                    this.state.sprawdzMode ?
                        <div>
                            <button onClick={this.onWiem} className="btn btn-success">Wiem</button>
                            <span> </span>
                            <button onClick={this.onNieWiem} className="btn btn-danger">Niewiem</button>
                        </div>
                        :
                        <button onClick={this.onSprawdz} className="btn btn-primary">Sprawdź</button>
                    :
                    <a href="/#/selectGame" className="btn btn-primary">Powrót</a>
            }

        </div>

    }
}
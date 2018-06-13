import * as React from "react";
import {CategorySelectCMP} from "../../components/CategorySelectCMP";

export class SelectGamePage extends React.Component {

    render() {
        return <div>
            <form>
                <div className="form-group">
                    <h1>Select game:</h1>
                    <button style={{margin:5}} className="btn btn-primary">Ukryj pierwszy</button>
                    <button style={{margin:5}} className="btn btn-primary">Ukryj drugi</button>
                    <button style={{margin:5}} className="btn btn-primary">Ukryj losowy</button>
                </div>

                <CategorySelectCMP />

                <a className="btn btn-primary" href="/#/learn">Start</a>
            </form>
        </div>
    }

}
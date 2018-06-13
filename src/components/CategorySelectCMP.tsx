import * as React from "react";
import {CategoryVO} from "../vo/CategoryVO";
import axios from "axios";

interface State {
    categories: CategoryVO[]
}

interface Props {
}

export class CategorySelectCMP extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);

        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.loadCategories();
    }

    state: State = {
        categories: []
    };

    loadCategories = () => {
        axios.get("http://localhost:9000/categories/")
            .then(response => {
                this.setState({
                    categories: response.data
                });
            })
    };

    render() {
        return <select style={{textAlignLast: 'center'}} className="form-control" id="exampleFormControlSelect1">
            <option value="" disabled selected hidden>Select category</option>
            {
                this.state.categories.map((category) =>
                    <option>{category.name}</option>
                )
            }
        </select>
    }
}
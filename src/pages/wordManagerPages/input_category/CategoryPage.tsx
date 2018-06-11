import * as React from "react";
import {CategoryVO} from "../../../vo/CategoryVO";
import axios from "axios";

interface State {
    categories: CategoryVO[],
    category: CategoryVO,
    disabledBtn: Boolean
}

interface Props {
}

class CategoryPage extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }


    state: State = {
        categories: [],
        category: {
            name: '',
            id: Date.now()
        },
        disabledBtn: false
    };

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const elem = event.target,
            fieldName = elem.name,
            fieldValue = elem.value;

        this.setState(prevState => ({
            category: {
                ...prevState.category,
                [fieldName]: fieldValue
            }
        }));

        /*
                if (this.state.category.name.length > 0)
                    this.setState({disabledBtn: false})
        */
    };

    componentDidMount() {
        this.loadCategories();
    }

    loadCategories = () => {
        axios.get("http://localhost:9000/categories/")
            .then(response => {
                this.setState({
                    categories: response.data
                });
                console.log(this.state.categories);
            })
    };

    saveCategory = (category: CategoryVO) => {
        category.id = Date.now();
        axios.post<CategoryVO>("http://localhost:9000/categories/", category)
            .then(response => {
                // this.props.reloadWords && this.props.reloadWords();
                this.loadCategories();
                category.name = '';
                this.setState({category, disabledBtn: true});
            })
    };


    onSave = () => {
        this.saveCategory(this.state.category);
    };

    onDelete = () => {

    };

    render() {
        return (
            <div>
                <ul className="list-group">
                    <li className="list-group-item list-group-item-info d-flex justify-content-between align-items-center">
                        <input type="text"
                               value={this.state.category.name}
                               name="name"
                               className="mb-2 input-group form-control"
                               placeholder="Insert category"
                               onChange={this.handleChange}/>
                        <button
                            className="mb-2 input-group-append btn btn-success"
                            type="button" onClick={this.onSave}>Zapisz
                        </button>
                        <button
                            className="mb-2 input-group-append btn btn-danger"
                            type="button" onClick={this.onDelete}>Usuń
                        </button>
                    </li>
                    {
                        this.state.categories.map((category, index) =>
                            <li key={index}
                                className='list-group-item d-flex justify-content-between align-items-center'>
                                <small>{category.name}</small>
                            </li>
                        )
                    }
                </ul>
            </div>
        );
    }
}

export default CategoryPage;
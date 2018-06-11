import * as React from "react";
import {CategoryVO} from "../../../vo/CategoryVO";
import axios from "axios";

interface State {
    categories: CategoryVO[],
    category: CategoryVO,
    disabledBtn: Boolean,
    editMode: Boolean
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
            id: Date.now(),
            selected: false
        },
        disabledBtn: false,
        editMode: false
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
    selectCategory = (_category: CategoryVO) => {
        this.unselectCategoryItems();
        _category.selected = true;
        this.setState({category: _category, editMode: true});
        console.log(_category.name);
    };

    unselectCategoryItems = () => {
        this.state.categories.map(category => {
            category.selected = false;
        });
    };

    onSave = () => {
        this.saveCategory(this.state.category);
    };

    onDelete = () => {
        axios.delete("http://localhost:9000/categories/" + this.state.category.id)
            .then(response => {
                this.loadCategories();
                let _category: CategoryVO = {
                    name: '',
                    id: 0,
                    selected: false
                };
                this.setState({category: _category, editMode: false, disabledBtn: true});
            });
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
                                onClick={e => this.selectCategory(category)}
                                className={category.selected ? 'active list-group-item d-flex justify-content-between align-items-center' : 'list-group-item d-flex justify-content-between align-items-center'}>
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
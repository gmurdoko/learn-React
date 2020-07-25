import React, { Component } from "react";
const redux = require("redux");
const createStore = redux.createStore;

const store = createStore(rootReducer);
const rootReducer = (state = intialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { ...state, number: state.number + action.number2 };
            break;
        case "DIVISION":
            return { ...state, number: state.number / action.number2 };
            break;
        case "DECREMENT":
            return { ...state, number: state.number - action.number2 };
            break;
        case "MULTIPLE":
            return { ...state, number: state.number * action.number2 };
            break;
        default:
            return state;
            break;
    }
};

class CalcRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            angka1: 0,
            angka2: 0,
            result: 0,
        };
    }
    handleOnChange = (event) => {
        let name = event.target.name;
        this.setState({ ...this.state, [name]: event.target.value });
    };
    render() {
        return (
            <div>
                <h2>{this.state.result}</h2>
                <form action="">
                    <input
                        type="number"
                        name="angka1"
                        value={this.state.angka1}
                        onChange={(event) => {
                            this.handleOnChange(event);
                        }}
                    />
                    <input
                        type="number"
                        name="angka2"
                        value={this.state.angka2}
                        onChange={(event) => {
                            this.handleOnChange(event);
                        }}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            this.submitButton();
                        }}
                    >
                        +
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            this.clearButton();
                        }}
                    >
                        -
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            this.submitButton();
                        }}
                    >
                        *
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            this.clearButton();
                        }}
                    >
                        /
                    </button>
                </form>
            </div>
        );
    }
}

export default CalcRedux;

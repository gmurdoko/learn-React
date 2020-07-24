import React, { Component } from "react";
import SubmitButton from "./SubmitButton";
import { ThemeProvider } from "react-bootstrap/cjs";
class HocComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            favoriteFood: "",
            result: "",
        };
    }
    handleOnChange = (event) => {
        let name = event.target.name;
        this.setState({ ...this.state, [name]: event.target.value });
    };
    submitButton = () => {
        console.log("iniSubmit", this.state.userName, this.state.favoriteFood);

        this.setState({
            ...this.state,
            result: (
                <SubmitButton
                    userName={this.state.userName}
                    favoriteFood={this.state.favoriteFood}
                />
            ),
        });
        // this.setState({
        //     ...this.state,
        //     userName: "",
        //     favoriteFood: "",
        // });
    };

    clearButton = () => {
        localStorage.removeItem("userName");
        localStorage.removeItem("favoriteFood");
        this.setState({
            ...this.state,
            userName: "",
            favoriteFood: "",
        });
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        type="text"
                        name="userName"
                        value={this.state.userName}
                        onChange={(event) => {
                            this.handleOnChange(event);
                        }}
                    />
                    <input
                        type="text"
                        name="favoriteFood"
                        value={this.state.favoriteFood}
                        onChange={(event) => {
                            this.handleOnChange(event);
                        }}
                    />
                    <button
                        onClick={() => {
                            this.submitButton();
                        }}
                    >
                        Submit
                    </button>
                    <button
                        onClick={() => {
                            this.clearButton();
                        }}
                    >
                        {this.state.result}
                        Clear
                    </button>
                </form>
            </div>
        );
    }
}

export default HocComponent;

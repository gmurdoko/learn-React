import React, { Component } from "react";

class LoginComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
        };
    }

    handleChangeInput = (event) => {
        const name = event.target.name;
        console.log("INPUT NAME: ", event.target.name);
        console.log("INPUT VALUE: ", event.target.value);
        this.setState({ ...this.state, [name]: event.target.value });
    };

    handleSunbmit = () => {
        alert(
            `Username: ${this.state.username} Password: ${this.state.password}`
        );
    };

    render() {
        return (
            <div>
                <form>
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChangeInput}
                    />
                    <input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.handleChangeInput}
                    />
                    <button type="submit" onClick={this.handleSunbmit}>
                        submit
                    </button>
                </form>
            </div>
        );
    }
}

export default LoginComponent;

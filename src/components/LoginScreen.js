import React from "react";
import Login from "../login.js";

class LoginScreen extends React.Component {
    onButtonLoginClicked = () => {
        this.props.onAuth();
    };

    render() {
        return (
            <div>
                Login Screen
                <button onClick={this.onButtonLoginClicked}>login</button>
                <Login />
            </div>
        );
    }
}

export default LoginScreen;

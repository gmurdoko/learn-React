import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "./login.css";
class LoginPages extends Component {
    render() {
        const { onLogin } = this.props;
        return (
            <div className="container-fluid background">
                <div className="row col-md-12 justify-content-center">
                    <div className="col-md-6" style={{ marginTop: "130px" }}>
                        <LoginForm onLogin={onLogin} />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPages;

import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "./login.css";
// import { pushAuth } from "../../api/challengeApi/api";
class LoginPages extends Component {
    constructor(props) {
        super(props);
        this.state = {
            auth: { username: "", password: "" },
        };

        //
    }

    handleChange = (event, field) => {
        let { auth } = this.state;
        auth[field] = event.target.value;
        this.setState({ ...this.state, auth });
        console.log(this.state.auth);
    };
    clickLogin = (event) => {
        event.preventDefault();
        pushAuth(this.state.auth)
            .then((res) => {
                console.log(res);
                if (res.data !== null) {
                    // sessionStorage.setItem("auth-token", res.data.token);
                    this.props.onLogin(res.data);
                    this.resetAuth();
                }
            })
            .catch((error) => {
                alert("Username atau Password salah!");
                this.resetAuth();
                console.error(error);
            });
    };
    resetAuth = () => {
        this.setState({ ...this.state, auth: { username: "", password: "" } });
    };
    render() {
        return (
            <div className="container-fluid background">
                <div className="row col-md-12 justify-content-center">
                    <div className="col-md-6" style={{ marginTop: "130px" }}>
                        <LoginForm
                            auth={this.state.auth}
                            handleChange={this.handleChange}
                            clickLogin={this.clickLogin}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPages;

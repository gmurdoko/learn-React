import React, { Component } from "react";
import LoginForm from "./LoginForm";
import "./login.css";
import Navbar from "react-bootstrap/Navbar";
class LoginPages extends Component {
    render() {
        const mybg = {
            Bgimg: `url(${
                process.env.PUBLIC_URL + "/josh-soto-truHgj5kdDA-unsplash.jpg"
            })`,
            Lgimg: `${process.env.PUBLIC_URL + "/logo512.png"}`,
        };
        return (
            <div
                className="background"
                style={{
                    backgroundImage: mybg.Bgimg,
                }}
            >
                <div className="row col-md-12 justify-content-center">
                    <div className="col-md-6" style={{ marginTop: "130px" }}>
                        <LoginForm />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPages;

import React, { Component } from "react";
import "./App.css";
// import MyCard from "./components/myCard";
import LoginComponent from "./components/login";

class App extends Component {
    render() {
        return (
            <div className="container mt-5">
                <LoginComponent />
            </div>
        );
    }
}

export default App;

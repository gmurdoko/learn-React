import React, { Component } from "react";
import "./App.css";
import MyCard from "./components/myCard";

class App extends Component {
    state = {
        data: [],
    };

    addCard = () => {
        let joined = this.state.data.concat(1);
        this.setState({ data: joined });
    };

    render() {
        return (
            <div className="container mt-5">
                <button className="btn btn-primary mb-3" onClick={this.addCard}>
                    <strong>+</strong> ADD
                </button>
                <div className="row">
                    {this.state.data.map((value) => {
                        return <MyCard value={value} />;
                    })}
                </div>
            </div>
        );
    }
}

export default App;

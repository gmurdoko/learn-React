import React, { Component } from "react";
import "./App.css";
// import MyCard from "./components/myCard";
// import LoginComponent from "./components/login";
import MyCard from "./components/CardChange";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            data: [],
        };
    }

    handleChangeInput = (event) => {
        const name = event.target.name;
        // console.log("INPUT NAME: ", event.target.name);
        // console.log("INPUT VALUE: ", event.target.value);
        this.setState({ ...this.state, [name]: event.target.value });
    };

    handleSunbmit = () => {
        let inData = this.state.data;
        let inName = this.state.username;
        // inData.push({ name: inName });
        this.state.data.push({ name: inName });
        this.setState({
            ...this.state,
            data: this.state.data,
            username: "",
        });
    };
    deleteCard = (index) => {
        this.state.data.splice(index, 1);
        this.setState({ ...this.state, data: this.state.data });
        // alert(`data diubah ${this.state.data[index].nama}`);
    };
    editCard = (index, inName) => {
        this.state.data.splice(index, 1, { nama: inName });
        this.setState({ ...this.data, data: this.state.data });
        alert(`data diubah ${this.state.data[index].nama}`);
    };
    resetCard = () => {
        this.setState({
            ...this.state,
            data: this.state.data.splice(0, this.state.data.length),
        });
    };
    render() {
        console.log("STATE : ", this.state);
        const listData = this.state.data.map((value, index) => {
            return (
                <MyCard
                    value={value}
                    index={index}
                    deleteCard={this.deleteCard}
                    editCard={this.editCard}
                />
            );
        });
        return (
            <div className="container mt-5">
                <form action="">
                    <input
                        name="username"
                        type="text"
                        value={this.state.username}
                        onChange={this.handleChangeInput}
                    />
                    <button
                        type="button"
                        onClick={() => {
                            this.handleSunbmit();
                        }}
                        disabled={!this.state.username}
                    >
                        submit
                    </button>
                    <button
                        type="button"
                        onClick={this.resetCard}
                        // disabled={!this.state.username}
                    >
                        reset
                    </button>
                </form>
                <div className="row">{listData}</div>
            </div>
        );
    }
}

export default App;

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
        console.log("INPUT NAME: ", event.target.name);
        console.log("INPUT VALUE: ", event.target.value);
        this.setState({ ...this.state.username, [name]: event.target.value });
    };

    handleSunbmit = () => {
        let inData = this.state.data;
        let inName = this.state.username;
        // if (this.state.data.length !== 0) {
        //     this.state.data.splice(0, 1);
        // }
        inData.push({ nama: inName });
        this.setState({ ...this.state.data, inData });
    };
    deleteCard = (index) => {
        let delIndex = this.state.data.splice(index, 1);
        this.setState({ delIndex });
    };
    editCard = (index, inName) => {
        //
        // let inData = this.state.data;
        // let inName = this.state.username;
        let inEdit = this.state.data.splice(index, 1, { nama: inName });

        this.setState({ ...this.state.data, inEdit });
        alert(`data diubah ${this.state.data[index].nama}`);
    };
    resetCard = () => {
        let delAll = this.state.data.splice(0, this.state.data.length);
        this.setState({ delAll });
    };
    render() {
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
                    <button type="button" onClick={this.handleSunbmit}>
                        submit
                    </button>
                    <button type="button" onClick={this.resetCard}>
                        reset
                    </button>
                </form>
                <div className="row">
                    {listData}
                    {/* {this.state.data.map((value, index) => {
                        return (
                            <MyCard
                                value={value}
                                index={index}
                                deleteCard={this.deleteCard}
                                editCard={this.editCard}
                            />
                        );
                    })} */}
                </div>
            </div>
        );
    }
}

export default App;

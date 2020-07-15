import React, { Component } from "react";
import "./App.css";
import MyCard from "./components/myCard";

class App extends Component {
    state = {
        data: [
            { id: 1, name: "hehe", sub: "hoho" },
            { id: 2, name: "haha", sub: "hihi" },
            { id: 3, name: "fiml", sub: "dalskj" },
            { id: 4, name: "tidaakk", sub: "akkkk" },
            { id: 5, name: "saitama", sub: "hoho" },
            { id: 6, name: "genoskun", sub: "hihi" },
            { id: 7, name: "kings", sub: "dalskj" },
            { id: 8, name: "bang", sub: "akkkk" },
        ],
    };

    addCard = (id) => {
        // let joined = this.state.data.concat(1);
        let joined = this.state.data;
        joined.push({ id: id, name: `tambah  ke ${id}`, sub: "tambahsuh" });
        this.setState({ data: joined });
    };
    delCard = (index) => {
        let delIndex = this.state.data.splice(index, 1);
        this.setState({ delIndex });
    };
    resetCard = () => {
        this.setState({ ...this.state.data });
    };

    render() {
        let a = 0;
        return (
            <div className="container mt-5">
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => {
                        this.addCard(a);
                    }}
                >
                    <strong>+</strong> ADD
                </button>
                <button
                    className="btn btn-primary mb-3"
                    onClick={() => {
                        this.resetCard();
                    }}
                >
                    RESET
                </button>
                <div className="row">
                    {this.state.data.map((value, index) => {
                        a = value.id + 1;
                        return (
                            <MyCard
                                value={value}
                                index={index}
                                delet={this.delCard}
                            />
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default App;

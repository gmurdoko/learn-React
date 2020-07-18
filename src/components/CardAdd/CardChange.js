import React, { Component, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MyCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: "edit",
            inputNama: [],
        };
    }

    handleChangeEdit = (event) => {
        // const name = event.target.nama;
        // console.log("INPUT NAME: ", event.target.id);
        this.setState({ ...this.state, inputNama: event.target.value });
    };

    componentDidMount() {
        this.setState({ inputNama: this.props.value.name });

        // this.state.inputNama : this.props.value.name;
        // document.title = `You clicked ${this.state.count} times`;
    }
    componentWillReceiveProps(nextProps, nextContext) {
        if (nextProps.value.name !== this.inputNama) {
            this.setState({ inputNama: nextProps.value.name });
        }
    }

    componentDidUpdate() {
        // this.setState({ inputNama: this.props.value.name });
        // this.state.inputNama = this.props.value.name;
        // this.setState({ ...this.state, inputNama: this.props.value.name });
        // document.title = `You clicked ${this.state.count} times`;
    }
    // refresh = () => {
    //     this.render();
    //     this.setState({ inputNama: this.props.value.name });
    //     this.setState({ ...this.state, inputNama: this.props.value.name });
    // };

    render() {
        console.log("CARD CHANGE: ", this.state.inputNama);
        let { value, index, deleteCard, editCard } = this.props;

        // Create a new array based on current state:

        // this.state.inputNama.push(value.name);

        // console.log("this state: ", this.state);
        // console.log("kiriman:", value.name);
        // this.setState({ ...this.state, inputNama: inData });
        let switchButton = (index, name) => {
            // console.log("nama by id: ", this.state.inputNama[index]);
            if (document.getElementById(index).disabled === true) {
                document.getElementById(index).disabled = false;
                // document.getElementById("text").value = `save`;

                this.setState({
                    text: "save",
                });
            } else {
                // editCard(index, value.nama);
                // document.getElementById("text").value = `edit`;
                editCard(index, name);
                this.setState({
                    text: "edit",
                });
                document.getElementById(index).disabled = true;
            }
        };

        return (
            <div>
                <div className="col" style={{ marginTop: "20px" }}>
                    <div className="card" style={{ width: "20rem" }}>
                        <div className="card-body">
                            {/* {formInput} */}
                            <input
                                name={index}
                                id={index}
                                type="text"
                                value={this.state.inputNama}
                                disabled={true}
                                onChange={this.handleChangeEdit}
                            />
                            <h5 className="card-title">{}</h5>
                        </div>
                        <div className="card-body">
                            <button
                                className="btn btn-primary mb-3"
                                onClick={() => deleteCard(index)}
                            >
                                remove
                            </button>
                            <button
                                className="btn btn-primary mb-3"
                                onClick={() => {
                                    switchButton(index, this.state.inputNama);
                                }}
                            >
                                {this.state.text}
                            </button>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default MyCard;

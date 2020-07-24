import React, { Component } from "react";
import Addition from "./Addition";
import Substraction from "./Substraction";

class Hoc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            operan1: 0,
            operan2: 0,
            result: 0,
        };
    }

    onChange = (event) => {
        let name = event.target.name;
        this.setState({ [name]: event.target.value });
    };
    handleButtonAdd = () => {
        this.setState({
            ...this.state,
            result: (
                <Addition
                    key={new Date()}
                    operan1={this.state.operan1}
                    operan2={this.state.operan2}
                />
            ),
        });
    };
    handleButtonSub = () => {
        this.setState({
            ...this.state,
            result: (
                <Substraction
                    key={new Date()}
                    operan1={this.state.operan1}
                    operan2={this.state.operan2}
                />
            ),
        });
    };
    // console.log("HOC",key);
    render() {
        return (
            <div>
                <input
                    type="number"
                    name="operan1"
                    value={this.state.operan1}
                    onChange={(event) => {
                        this.onChange(event);
                    }}
                />
                <input
                    type="number"
                    name="operan2"
                    value={this.state.operan2}
                    onChange={(event) => {
                        this.onChange(event);
                    }}
                />
                <button onClick={this.handleButtonAdd}>+</button>
                <button onClick={this.handleButtonSub}>-</button>
                {this.state.result}
            </div>
        );
    }
}

export default Hoc;

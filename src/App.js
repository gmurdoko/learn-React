import React from "react";
import { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import loginForm from "./login";
import "./App.css";
import UserCard from "./components/UserCard";
import IncrementNumber from "./components/increaseNumber";

//di eksekusi setelah will mount
class App extends Component {
    //fase:1.Mounting 2.Updating 2.Unmounting
    //Initiate first
    //dieksekusi sebelum render #peratma
    componentWillMount() {
        console.log("Will called in app");
    }
    //dieksekusi setelah render
    componentDidMount() {
        console.log("Component Did Mount");
    }
    componentWillReceiveProps(newProps) {
        console.log("Component Will Receive Props");
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component Will Update");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("component Did update");
    }
    PrintDataFunc = () => {
        return (
            <div>
                <div>ini dari</div>
                <div>data func</div>
            </div>
        );
    };

    state = {
        number: 1,
    };

    alertName = (name) => {
        return alert(`${name}`);
    };

    render() {
        return (
            <div className="App">
                {/* <UserCard
                    fromApp={{ name: "Galang", address: "Lampung" }}
                    dariFunc={this.PrintDataFunc}
                    popUpAlertName={this.alertName}
                /> */}
                <IncrementNumber
                    increment={this.increment}
                    number={this.state.number}
                />
            </div>
        );
    }
    increment = () => {
        this.setState({
            number: this.state.number + 1,
        });
    };
}

export default App;

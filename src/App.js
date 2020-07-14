import React from "react";
import { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import loginForm from "./login";
import "./App.css";

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
    render() {
        return (
            <div className="App">
                <h1>{"Component App"}</h1>
            </div>
        );
    }
}

export default App;

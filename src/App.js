import React from "react";
import { Component } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import loginForm from "./login";
import "./App.css";
// import UserCard from "./components/UserCard";
// import IncrementNumber from "./components/increaseNumber";
// import DecrementNumber from "./components/decreaseNumber";
import LoginScreen from "./components/LoginScreen";
import HomeScreen from "./components/HomeScreen";
// import Login from "./login.js";

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

    state = {
        isLoggedIn: false,
    };

    onAuthentication = () => {
        this.setState({ isLoggedIn: true });
    };
    onLogOut = () => {
        this.setState({ isLoggedIn: false });
    };
    render() {
        let currentScreen;
        if (this.state.isLoggedIn) {
            currentScreen = <HomeScreen onSignOut={this.onLogOut} />;
        } else {
            currentScreen = <LoginScreen onAuth={this.onAuthentication} />;
        }
        return <div className="App">{currentScreen}</div>;
    }
}

export default App;

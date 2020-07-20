import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.css";
// import FetchGetApi from "./FetchGetApi";
import RoomPage from "./pages/rooms/RoomPages";
import LoginPages from "./pages/login/LoginPages";
import HomePage from "./pages/home/HomePage";
import MyNavbar from "./components/MyNavbar";
// import history from "./history";

class App extends Component {
    render() {
        return (
            <>
                <div className="container-fluid " style={{ width: "100%" }}>
                    <Router>
                        <MyNavbar />

                        <Switch>
                            <Route exact path="/" component={HomePage} />
                            <Route exact path="/list" component={RoomPage} />
                            <Route exact path="/login" component={LoginPages} />
                        </Switch>
                    </Router>
                </div>
            </>
        );
    }
}

export default App;

import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import RoomPage from "./pages/rooms/RoomPages";
// import LoginPages from "./pages/login/LoginPages";
// import HomePage from "./pages/home/HomePage";

import Nav from "./components/router/Nav";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav />
                {/* <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/list" component={RoomPage} />
                    <Route path="/login" component={LoginPages} />
                </Switch> */}
            </BrowserRouter>
        );
    }
}

export default App;

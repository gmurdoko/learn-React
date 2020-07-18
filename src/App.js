import React, { Component } from "react";
import "./App.css";
// import FetchGetApi from "./FetchGetApi";
import RoomPage from "./pages/rooms/RoomPages";
import LoginPages from "./pages/login/LoginPages";

class App extends Component {
    render() {
        return (
            <>
                {/* <RoomPage /> */}
                <LoginPages />
            </>
        );
    }
}

export default App;

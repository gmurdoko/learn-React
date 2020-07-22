import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav2 from "./components/router/Nav2";
// import SamplePropTypes from "./components/SamplePropTypes";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <Nav2 />
                {/* <Nav /> */}
                {/* <SamplePropTypes>
                    <div />
                </SamplePropTypes> */}
            </BrowserRouter>
        );
    }
}

export default App;

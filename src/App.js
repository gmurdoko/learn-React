import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav2 from "./components/router/Nav2";
import Nav from "./components/router/Nav";
import Hoc from "./container/Hoc";
import HocComponent from "./challengeHoc/hocComponent";

// import SamplePropTypes from "./components/SamplePropTypes";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                {/* <HocComponent /> */}
                {/* <Hoc /> */}
                {/* <Nav2 /> */}
                <Nav />
                {/* <SamplePropTypes>
                    <div />
                </SamplePropTypes> */}
            </BrowserRouter>
        );
    }
}

export default App;

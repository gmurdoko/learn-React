import React, { Component } from "react";

class FetchGetApi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
        };
    }
    GetData = async () => {
        try {
            const response = await fetch("/user");
            console.log(response);
            const data = await response.json();
            console.log(data);
        } catch (err) {
            console.log(err);
        }
    };
    componentDidMount() {}

    render() {
        const renderToPage = this.state.result.map((hasil) => (
            <li>{hasil.username}</li>
        ));
        return (
            <div>
                <h1>get data</h1>
                {renderToPage}
            </div>
        );
    }
}

export default FetchGetApi;

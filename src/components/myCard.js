import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MyCard extends Component {
    render() {
        return (
            <div>
                <div className="col">
                    <div className="card" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p>Lorem Ipsum</p>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default MyCard;

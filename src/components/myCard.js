import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MyCard extends Component {
    render() {
        let { value, index, delet } = this.props;
        return (
            <div>
                <div className="col">
                    <div className="card" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <h5 className="card-title">{value.name}</h5>
                            {/* <p>{index}</p> */}
                            <p>{value.id}</p>
                            <p>{value.sub}</p>
                            <button
                                className="btn btn-primary mb-3"
                                onClick={() => delet(index)}
                            >
                                remove
                            </button>
                        </div>
                    </div>
                    <br />
                </div>
            </div>
        );
    }
}

export default MyCard;

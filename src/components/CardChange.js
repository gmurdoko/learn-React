import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class MyCard extends Component {
    // state = {
    //     ubahan: [],
    // };

    render() {
        let { value, index, deleteCard, editCard } = this.props;
        let text = "edit";
        let handleChange = (event) => {
            // const name = event.target.name;
            console.log("INPUT NAME: ", event.target.name);
            console.log("INPUT VALUE: ", event.target.value);
            value.name = event.target.value;
        };
        let switchButton = (index) => {
            if (text === "edit") {
                document.getElementById(index).disabled = false;
                text = "save";
            } else {
                editCard(index, value.nama);
                text = "edit";
                document.getElementById(index).disabled = true;
            }
        };
        return (
            <div>
                <div className="col" style={{ marginTop: "20px" }}>
                    <div className="card" style={{ width: "20rem" }}>
                        <div className="card-body">
                            <input
                                name="nama"
                                id={index}
                                type="text"
                                value={value.nama}
                                onChange={handleChange}
                                disabled={true}
                            />
                            <h5 className="card-title">{}</h5>
                        </div>
                        <div className="card-body">
                            <button
                                className="btn btn-primary mb-3"
                                onClick={() => deleteCard(index)}
                            >
                                remove
                            </button>
                            <button
                                className="btn btn-primary mb-3"
                                onClick={() => {
                                    switchButton(index);
                                }}
                            >
                                {text}
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

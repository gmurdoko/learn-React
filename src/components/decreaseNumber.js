import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class DecrementNumber extends React.Component {
    render() {
        let { number, decrement } = this.props;
        return (
            <div style={{ marginTop: 10 }}>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        decrement(number);
                    }}
                >
                    Min
                </button>
                {/* <div>{number}</div> */}
            </div>
        );
    }
}

export default DecrementNumber;

import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class IncrementNumber extends React.Component {
    render() {
        let { number, increment } = this.props;
        return (
            <div style={{ marginTop: 10 }}>
                <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => {
                        increment(number);
                    }}
                >
                    Plus
                </button>
                <span>{number}</span>
            </div>
        );
    }
}

export default IncrementNumber;

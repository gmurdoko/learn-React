import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";

class IncrementNumber extends React.Component {
    render() {
        let { number, increment, message } = this.props;
        let result;
        if (message === "") {
            result = <div>{number}</div>;
        } else {
            result = (
                <div class="alert alert-danger" role="alert">
                    {message}
                </div>
            );
        }
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
                {result}
            </div>
        );
    }
}

export default IncrementNumber;

import React from "react";
export default function withCalc(WrappedComponent, calculation) {
    return class extends React.Component {
        state = {
            result: 0,
        };
        doPrintResult = (result) => {
            this.setState({ result: Number(result) });
        };

        componentDidMount() {
            console.log("with calc", this.props.key);
            this.doPrintResult(
                calculation(this.props.operan1, this.props.operan2)
            );
        }
        render() {
            return (
                <WrappedComponent data={this.state.result} {...this.props} />
            );
        }
    };
}

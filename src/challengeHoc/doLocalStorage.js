import React, { Component } from "react";

export default function DoLocalStorage(WrappedComponent) {
    return class extends Component {
        componentDidMount() {
            console.log("ini wrapped:", WrappedComponent);
            localStorage.setItem("userName", this.props.userName);
            localStorage.setItem("favoriteFood", this.props.favoriteFood);
        }

        render() {
            return <WrappedComponent />;
        }
    };
}

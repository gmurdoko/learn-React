import React from "react";

class HomeScreen extends React.Component {
    onButtonLogOutClicked = () => {
        this.props.onSignOut();
    };
    render() {
        return (
            <div>
                HomeScreen
                <button onClick={this.onButtonLogOutClicked}>logout</button>
            </div>
        );
    }
}

export default HomeScreen;

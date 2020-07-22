import React, { Component } from "react";
import { Redirect, withRouter, Switch, Route } from "react-router-dom";
import RoomPage from "../../pages/rooms/RoomPages";
import LoginPages from "../../pages/login/LoginPages";
import HomePage from "../../pages/home/HomePage";
import Notfound from "../../pages/home/HomePage";
import MyNavbar from "../navigate/MyNavbar";
const routes = [
    { id: 1, path: "/home", component: HomePage },
    // { id: 2, path: "/list", component: RoomPage },
];
class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activateMenu: "",
            auth: false,
        };
    }
    onLogin = () => {
        this.setState({ ...this.state, auth: true });
        this.props.history.push({ pathname: "/home" });
    };
    onLogout = () => {
        sessionStorage.clear();
        this.setState({
            auth: false,
        });
        // this.props.history.push({
        //     pathname: "/",
        // });
    };
    componentDidMount() {
        if (sessionStorage.getItem("auth-token") !== null) {
            this.setState({ ...this.state, auth: true });
            console.log(sessionStorage.getItem("auth-token"));
            this.props.history.push({ pathname: "/home" });
        } else {
            this.setState({ ...this.state, auth: false });
        }
    }
    render() {
        const routeList = routes.map((route) => {
            return (
                <Route
                    key={route.id}
                    path={route.path}
                    render={(props) => {
                        return this.state.auth ? (
                            <route.component {...props} />
                        ) : (
                            <Redirect to="/" />
                        );
                    }}
                />
            );
        });
        return (
            <div>
                <MyNavbar onLogout={this.onLogout} />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={(props) => {
                            return (
                                <LoginPages {...props} onLogin={this.onLogin} />
                            );
                        }}
                    />
                    {routeList}
                    <Route
                        // path="*"
                        render={(props) => {
                            return <Notfound />;
                        }}
                    />
                </Switch>
            </div>
        );
    }
}

export default withRouter(Nav);

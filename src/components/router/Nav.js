import React, { Component } from "react";
import { Redirect, withRouter, Switch, Route } from "react-router-dom";

import HomePage from "../../pages/home/HomePage";
import Notfound from "../../pages/home/HomePage";
import MyNavbar from "../navigate/MyNavbar";
import ExchangeContainer from "../../pages/exchange/ExchangeContainer";
const routes = [
    { id: 1, path: "/home", component: HomePage },
    { id: 2, path: "/list", component: ExchangeContainer },
];
class Nav extends Component {
    render() {
        const routeList = routes.map((route) => {
            return (
                <Route
                    key={route.id}
                    path={route.path}
                    render={(props) => {
                        return <route.component {...props} />;
                    }}
                />
            );
        });
        return (
            <div>
                <MyNavbar />
                <Switch>{routeList}</Switch>
            </div>
        );
    }
}

export default withRouter(Nav);

import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";

class MyNavbar extends Component {
    render() {
        const { onLogout } = this.props;
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/home">
                    tropusproject
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">
                        Home
                    </Nav.Link>
                    <Nav.Link
                        as={Button}
                        onClick={() => {
                            onLogout();
                        }}
                    >
                        Logout
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;

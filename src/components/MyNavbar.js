import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/">
                    tropusproject
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/list">
                        List
                    </Nav.Link>
                    <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;

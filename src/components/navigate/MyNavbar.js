import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/home">
                    tropusproject
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/list">
                        List
                    </Nav.Link>
                    {/* <Nav.Link as={Link} to="/login">
                        Login
                    </Nav.Link> */}
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;

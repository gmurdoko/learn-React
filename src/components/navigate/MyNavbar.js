import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class MyNavbar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand as={Link} to="/home">
                    EX Rates
                </Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link as={Link} to="/home">
                        Home
                    </Nav.Link>
                    <Nav.Link as={Link} to="/list">
                        Exchanges
                    </Nav.Link>
                </Nav>
            </Navbar>
        );
    }
}

export default MyNavbar;

import React, { Component } from "react";
import Card from "react-bootstrap/Card";

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid">
                <Card>
                    <Card.Body>
                        <div className="jumbotron">
                            <h1 className="display-4">
                                Welcome to Exchange Rate
                            </h1>
                            <p className="lead">
                                This is a simple hero unit, a simple
                                jumbotron-style component for calling extra
                                attention to featured content or information.
                            </p>

                            <p>
                                It uses utility classes for typography and
                                spacing to space content out within the larger
                                container.
                            </p>
                        </div>
                    </Card.Body>
                </Card>
            </div>
        );
    }
}

export default HomePage;

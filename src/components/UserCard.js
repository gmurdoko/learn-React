import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
class UserCard extends React.Component {
    componentWillMount() {
        console.log("Component WILL MOUNT CARD!");
    }
    // Di eksekusi setelah render
    componentDidMount() {
        console.log("Component DID MOUNT CARD!");
    }
    componentWillReceiveProps(newProps) {
        console.log("Component WILL RECIEVE PROPS CARD!");
    }
    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log("Component WILL UPDATE CARD!");
    }
    componentDidUpdate(prevProps, prevState) {
        console.log("Component DID UPDATE CARD!");
    }
    render() {
        let { name, address } = this.props.fromApp;
        let fromFunc = this.props.dariFunc();
        let popUp = this.props.popUpAlertName;
        return (
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <div className="card" style={{ width: "30rem" }}>
                            <div className="card-body">
                                <h5 className="card-title">User Card</h5>

                                <p>{name}</p>
                                <p>{address}</p>
                                <h6>{fromFunc}</h6>
                                <button
                                    type="button"
                                    class="btn btn-success"
                                    onClick={() => {
                                        popUp(name);
                                    }}
                                >
                                    klik
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default UserCard;

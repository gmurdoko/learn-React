import React from "react";
import {Link} from "react-router-dom";


const CompB = (props) => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Component B</li>
                </ol>
            </nav>
            <br/>
            <Link to='/' >Component A</Link><br/>
            {props.location.state.from}
        </div>
    )
}

export default CompB;
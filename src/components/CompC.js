import React from "react";
import {Link} from "react-router-dom";


const CompC = (props) => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Component C</li>
                </ol>
            </nav>
            <br/>
            <Link to='/' >Component A</Link>
            <Link to='/CompB' >Component B</Link>
            {props.match.param.name}
        </div>
    )
}

export default CompC;
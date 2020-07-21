import React from "react";
import {Link} from "react-router-dom";

const CompA = () => {
    return (
        <div>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item active" aria-current="page">Component A</li>
                </ol>
            </nav>
            <br/>
            <Link to='/' >Component B</Link><br/>
            <Link to='/compC/reza' >Component C</Link>
        </div>
    )
}

export default CompA;
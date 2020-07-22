import React, { Component } from "react";
import PropTypes from "prop-types";
import { propTypes } from "react-bootstrap/esm/Image";

class SamplePropTypes extends Component {
    render() {
        let children = this.props.children;
        return (
            <div>
                {/* My name:{this.props.name || "name"}, and age :
                {this.props.age || 19} */}
                {/* My name:{this.props.name}, and age :{this.props.age} */}
                {children}
            </div>
        );
    }
}

// SamplePropTypes.defaultProps = { name: "cahyo", age: 15 };
SamplePropTypes.propTypes = {
    // name: PropTypes.string,
    children: PropTypes.element.isRequired,
};
export default SamplePropTypes;

import React from "react";
import "./second.css";

const Second = (props) => {
    console.log(props);
    return (
        <div>
            <h1 className="second-text">{props.data}</h1>
            <button type="button" className="btn btn-outline-primary">
                Primary
            </button>
        </div>
    );
};

export default Second;

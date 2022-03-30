import React from "react";

const BtnUseCallback = props => {

    return (
        <button className="btn" onClick={() => props.inc(props.delta)} >+{props.delta}</button>
    )

}

export default BtnUseCallback
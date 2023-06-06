import React from "react";
import logo from "../../img/title-logo.png"

const Title = ({title_txt}) => {
    return (
        <h1 className="home-title" style={{ alignItems: "center" }}>
            <img src={logo} style={{ width: 250 }} alt="logo" /><br/>
            <span className="red-text">{title_txt}</span>
        </h1>
    )
}

export default Title;
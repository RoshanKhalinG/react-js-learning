import React from "react";

const Button = (props, link) =>{
    return <a href={props.link} target = "_blank"><button className="button">{props.name}</button></a>
}

export default Button;
import React from "react";

export const Item = (props) => {
    return (
        <>
            <h2>{props.title}</h2>
            <img src={props.img} alt={props.description} />
            <p>{props.description}</p>
        </>
    );
}
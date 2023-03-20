import React from "react";
import { Item } from "./Item";
import { items } from "./itemDatabase";

export const Items = () => {
    return (
        <div>
            {
                items.map(
                    (props) => 
                    <Item
                        key={props.id}
                        img={props.img}
                        title={props.title}
                        description={props.description}
                    />
                )
            }
        </div>
    );
}
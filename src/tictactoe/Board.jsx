import React from "react";
import { Square } from "./Square";

export const Board = () => {
    return (
        <div>
            <div className="row">
                <Square className="b-bottom b-right" />
                <Square className="b-bottom b-right" />
                <Square className="b-bottom" />
            </div>
            <div className="row">
                <Square className="b-bottom b-right" />
                <Square className="b-bottom b-right" />
                <Square className="b-bottom" />
            </div>
            <div className="row">
                <Square className="b-right" />
                <Square className="b-right" />
                <Square />
            </div>
        </div>
    )
}
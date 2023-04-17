import React from "react";
import { Board } from "./Board";

import "./TicTacToe.css";

export const TicTacToe = () => {
    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            <Board />
        </div>
    )
}
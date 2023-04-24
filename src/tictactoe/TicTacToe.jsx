import React from "react";
import { useState } from "react";

import { Board } from "./Board";

import "./TicTacToe.css";

const initialBoard = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);

    function onSquareClick(index) {
        if (gameState[index] !== "") {
            return;
        }
        let newGameState = gameState.slice();
        newGameState[index] = isXTurn ? "X" : "O";
        setGameState(newGameState);
        setIsXTurn(!isXTurn);
    }

    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            <Board
                gameState={gameState}
                onSquareClick={onSquareClick}
            />
        </div>
    );
}
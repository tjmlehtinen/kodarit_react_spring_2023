import React from "react";
import { useState, useEffect } from "react";

import { Board } from "./Board";

import "./TicTacToe.css";

const initialBoard = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("iuyouy");

    useEffect(() => {
        const winner = checkWinner();
        if (winner) {
            setStatus(`Winner: ${winner}`);
        }
        else if (!gameState.includes("")) {
            setStatus("It's a draw!");
        }
        else {
            setStatus(`It's ${isXTurn ? "X" : "O"}'s turn`);
        }
    }, [gameState]);

    function onSquareClick(index) {
        if (status.includes("Winner")) {
            return;
        }
        if (gameState[index] !== "") {
            return;
        }
        let newGameState = gameState.slice();
        newGameState[index] = isXTurn ? "X" : "O";
        setGameState(newGameState);
        setIsXTurn(!isXTurn);
    }

    function checkWinner() {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        for (const line of lines) {
            const [a, b, c] = line.map(i => gameState[i]);
            if (a !== "" && a === b && a === c) {
                return a;
            }
        }
        return null;
    }

    return (
        <div className="game">
            <h1>Tic-Tac-Toe</h1>
            <Board
                gameState={gameState}
                onSquareClick={onSquareClick}
            />
            {(!status.includes("Winner")) && (
            <>
                <span>{status}</span>
                <button
                    onClick={() => {
                        setGameState(initialBoard);
                        setIsXTurn(true);
                    }}
                >
                    Clear board
                </button>
            </>)}
            {(status.includes("Winner")) && (
            <>
                <span style={{color: "green"}}>{status}</span>
                <button
                    onClick={() => {
                        setGameState(initialBoard);
                        setIsXTurn(true);
                    }}
                >
                    Clear board
                </button>
            </>)}
        </div>
    );
}
import React from "react";
import { useState, useEffect } from "react";

import { Board } from "./Board";
import { ScoreBoard } from "./ScoreBoard";

import "./TicTacToe.css";

const initialBoard = ["", "", "", "", "", "", "", "", ""];

export const TicTacToe = () => {
    const [gameState, setGameState] = useState(initialBoard);
    const [isXTurn, setIsXTurn] = useState(true);
    const [status, setStatus] = useState("");
    const [scores, setScores] = useState({xScore: 0, oScore: 0});

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

    useEffect(() => {
        const winner = checkWinner();
        if (winner === "X") {
            setScores({xScore: scores.xScore + 1, oScore: scores.oScore});
        }
        if (winner === "O") {
            setScores({xScore: scores.xScore, oScore: scores.oScore + 1});
        }
    }, [status])

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

    const clearBoard = () => {
        setGameState(initialBoard);
        setIsXTurn(true);
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
            <ScoreBoard
                scores={scores}
            />
            <button
                type="button"
                onClick={() => {
                    setScores({xScore: 0, oScore: 0});
                }}
            >
                Clear scores
            </button>
            <Board
                gameState={gameState}
                onSquareClick={onSquareClick}
            />
            {(!status.includes("Winner")) && (
            <>
                <span>{status}</span>
                <button
                    style={{background: "yellow"}}
                    onClick={clearBoard}
                >
                    Clear board
                </button>
            </>)}
            {(status.includes("Winner")) && (
            <>
                <span style={{color: "green"}}>{status}</span>
                <button
                    style={{background: "lightgreen"}}
                    onClick={clearBoard}
                >
                    Clear board
                </button>
            </>)}
        </div>
    );
}
import React, { useState } from "react";

interface TicTacToeProps {
    show: (value: boolean) => void;
    setShowTicTacToe: (value: boolean) => void;
}

const TicTacToe: React.FC<TicTacToeProps> = ({ show, setShowTicTacToe }) => {
    const [grid, setGrid] = useState<(string | null)[]>(Array(9).fill(null)); 
    const [player1, setPlayer1] = useState<boolean>(true); 
    const [gameEnd, setGameEnd] = useState<boolean>(false);
    const [winner, setWinner] = useState<string | null>(null);

    const handleGoBack = () => {
        show(false);
        setShowTicTacToe(false);
    };

    const checkWinner = (grid: (string | null)[]): void => {
        const winningCombinations = [
            [0, 1, 2], // Top row
            [3, 4, 5], // Middle row
            [6, 7, 8], // Bottom row
            [0, 3, 6], // Left column
            [1, 4, 7], // Middle column
            [2, 5, 8], // Right column
            [0, 4, 8], // Diagonal from top-left to bottom-right
            [2, 4, 6]  // Diagonal from top-right to bottom-left
        ];

        for (let i = 0; i < winningCombinations.length; i++) {
            const [a, b, c] = winningCombinations[i];
            if (grid[a] && grid[a] === grid[b] && grid[a] === grid[c]) {
                setGameEnd(true);
                setWinner(grid[a]);
                return;
            }
        }
        if (grid.every(cell => cell !== null)) {
            setGameEnd(true);
            setWinner('Draw');
        }
    };

    const playerMove = (index: number): void => {
        if (!grid[index] && !gameEnd) {
            const newGrid = [...grid];
            newGrid[index] = player1 ? 'X' : 'O';
            setGrid(newGrid);
            setPlayer1(!player1);
            checkWinner(newGrid);
        }
    };

    const restartGame = (): void => {
        setGrid(Array(9).fill(null));
        setPlayer1(true);
        setGameEnd(false);
        setWinner(null);
    };

    return (
        <div className="tic-tac-toe-cont">
            <span id="go-back-btn" onClick={handleGoBack}>Go Back</span>
            <div className="game-cont">
                {grid.map((cell, index) => (
                    <div className='cell' key={index} onClick={() => playerMove(index)}>
                        {cell && <span className={cell === 'X' ? 'x' : 'o'}>{cell}</span>}
                    </div>
                ))}
            </div>
            <span id="turn">
                {gameEnd ? (
                    winner === 'Draw' ? 'It\'s a draw!' : `${winner} is the winner`
                ) : (
                    player1 ? "X player's turn" : "O player's turn"
                )}
            </span>
            <button className="restart-btn" onClick={restartGame}>Restart</button>
        </div>
    );
};

export default TicTacToe;

// Import necessary components and styles
import Board from "./Board";
import "./App.css";
import { createContext, useState } from "react";
import GameOver from "./GameOver";

// Create a context for the app to share data with components
export const AppContext = createContext<any>(null);

// Define the type for a move in the game
interface move {
  square: number;
  player: string;
}

// Define the winning combinations for Tic-Tac-Toe
const winCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // Rows
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // Columns
  [0, 4, 8],
  [2, 4, 6], // Diagonals
];

// Define the main App component
function App() {
  // State for tracking whose turn it is and the moves made
  const [turn, setTurn] = useState(true);
  const [moves, setMoves] = useState<move[]>([]);
  const [win, setWin] = useState("");
  const [gameOver, setGameOver] = useState(false);

  // Flags and strings for validating the game
  let flag1 = false;
  let flag2 = false;
  let flag3 = false;
  let str1 = "";
  let str2 = "";
  let str3 = "";

  // Function to validate the game after each move
  const validate = () => {
    console.log(moves.length);
    if (moves.length === 9) {
      setGameOver(true);
      setWin("Draw");
    }
    for (let i = 0; i < winCombinations.length; i++) {
      for (let j = 0; j < moves.length; j++) {
        if (winCombinations[i][0] === moves[j].square) {
          flag1 = true;
          str1 = moves[j].player;
        }
        if (winCombinations[i][1] === moves[j].square) {
          flag2 = true;
          str2 = moves[j].player;
        }
        if (winCombinations[i][2] === moves[j].square) {
          flag3 = true;
          str3 = moves[j].player;
        }
        if (flag1 && flag2 && flag3) {
          if (str1 === "X" && str1 === str2 && str2 === str3) {
            setGameOver(true);
            setWin("X Wins");
          } else if (str1 === "O" && str1 === str2 && str2 === str3) {
            setGameOver(true);
            setWin("O Wins");
          }
        }
      }

      flag1 = false;
      flag2 = false;
      flag3 = false;
    }
  };

  if (!gameOver) {
    validate();
  }

  // Render the App component
  return (
    <>
      {/* Provide context to the Board component */}
      <AppContext.Provider
        value={{
          turn,
          setTurn,
          moves,
          setMoves,
          win,
          gameOver,
        }}
      >
        <input type="checkbox" id="toggle"></input>
        <div className="container">
          <Board />
          {gameOver && <GameOver />}
        </div>
      </AppContext.Provider>
    </>
  );
}

// Export the App component as the default export
export default App;

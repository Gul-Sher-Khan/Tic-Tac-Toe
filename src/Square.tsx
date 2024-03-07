// Import necessary React components and assets
import { useContext, useEffect, useState } from "react";
import { AppContext } from "./App";
import cross from "./assets/cross.png";
import circle from "./assets/circle.png";

// Define the type for props
interface props {
  squarePos: number; // The position of the square on the board
}

// Define the Square component
const Square = ({ squarePos }: props) => {
  // Get data from the app context using useContext
  const { turn, setTurn, moves, setMoves, gameOver } = useContext(AppContext);

  // State to track whether the square is editable and its current value
  const [isEditable, setIsEditable] = useState(true);
  const [squareValue, setSquareValue] = useState("");

  // Function to handle square click and update the state
  const changeState = () => {
    if (isEditable && !gameOver) {
      setSquareValue(turn ? "X" : "O");
      setIsEditable(false);
      setTurn(!turn);
      setMoves([...moves, { square: squarePos, player: turn ? "X" : "O" }]);
    }
  };
  return (
    // Render the square as a clickable box
    <div className="box" onClick={changeState}>
      {/* Render X or O based on the square's value */}
      {squareValue === "X" ? (
        <img className="img" src={cross} alt="tick" />
      ) : squareValue === "O" ? (
        <img className="img" src={circle} alt="circle" />
      ) : null}
    </div>
  );
};

// Export the Square component as the default export
export default Square;

// Import necessary React components

import Square from "./Square";

// Define the Board component
const Board = () => {
  return (
    // Render a container for the Tic-Tac-Toe board
    <div className="board">
      {/* Render individual squares using the Square component */}
      <Square squarePos={0} />
      <Square squarePos={1} />
      <Square squarePos={2} />
      <Square squarePos={3} />
      <Square squarePos={4} />
      <Square squarePos={5} />
      <Square squarePos={6} />
      <Square squarePos={7} />
      <Square squarePos={8} />
    </div>
  );
};

// Export the Board component as the default export
export default Board;

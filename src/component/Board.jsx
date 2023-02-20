import { useState } from "react";
import Square from "./Square";

function Board() {
    const [square, useSquare] = useSquare(Array(9).fill(null))
  return (
    <div>
      <div>
        <Square value={square(0)} />
        <Square value={square(1)} />
        <Square value={square(2)} />
      </div>
      <div>
        <Square value={square(3)} />
        <Square value={square(4)} />
        <Square value={square(5)} />
      </div>
      <div>
        <Square value={square(6)} />
        <Square value={square(7)} />
        <Square value={square(8)} />
      </div>
    </div>
  );
}

export default Board;

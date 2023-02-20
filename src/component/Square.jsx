import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <div className="flex flex-row bg-gray-600">
      <button className="bg-white " onClick={onSquareClick}>
        {value}
      </button>
    </div>
  );
}

export default Square;

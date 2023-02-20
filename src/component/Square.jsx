import { useState } from "react";

function Square() {
  const [value, setValue] = useState(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <div>
      <button onClick={handleClick}>{value}</button>
    </div>
  );
}

export default Square;

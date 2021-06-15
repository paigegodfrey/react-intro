import React from "react";

function Counter({ count, increment }) {
  return (
    <div className="Counter">
      <h1>The count is: {count}</h1>
      <button onClick={() => increment()}>Increment Count</button>
    </div>
  );
}

export default Counter;

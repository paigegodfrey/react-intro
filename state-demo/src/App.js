import React, { useState } from "react";
import Counter from "./Counter";

function App() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count => count + 1);
  }

  return (
    <div className="App">
      <Counter count={count} increment={increment} />
    </div>
  );
}

export default App;

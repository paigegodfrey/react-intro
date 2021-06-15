import React, { useState } from "react";
import "./ListItem.css";

function ListItem({ food }) {

  const [quantity, setQuantity] = useState(0);

  function increment() {
    setQuantity(foodQuantity => foodQuantity + 1);
  }

  return (
    <div className="ListItem">
      <h1>Item: {food}</h1>
      <h2>Quantity: {quantity}</h2>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default ListItem;

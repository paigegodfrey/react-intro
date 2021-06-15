import React from "react";
import "./ListItem.css";

function ListItem(props) {
  return (
    <div className="ListItem">
      <h1>Item: {props.food}</h1>
      <h2>Quantity: {props.quantity}</h2>
    </div>
  );
}

export default ListItem;

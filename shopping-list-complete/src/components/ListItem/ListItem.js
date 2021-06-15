import React from "react";

export default function ListItem({ item }) {

  const { name, qty } = item;

  return (
    <div className="ListItem">
      <h1>Item: {name}</h1>
      <h2>Quantity: {qty}</h2>
    </div>
  );
}
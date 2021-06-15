import React from "react";

export default function ListItem({ item }) {

  // destructure name and qty from item object
  const { name, qty } = item;

  return (
    <div className="ListItem">
      <h3>{name}: {qty}</h3>
    </div>
  );
}
import React from "react";

export default function ListItem({ item }) {

  // Destructure food and qty from item object
  const { food, qty } = item;

  return (
    <div className="ListItem">
      <h3>{food}: {qty}</h3>
    </div>
  );
}
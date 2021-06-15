import React from "react";

export default function ListItem({ item }) {

  const { name, qty } = item;

  return (
    <div className="ListItem">
      <h3>{name}: {qty}</h3>
    </div>
  );
}
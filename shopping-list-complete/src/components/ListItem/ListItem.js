import React from "react";

export default function ListItem({ item }) {

  const { name, qty } = item;

  return (
    <div className="ListItem">
      <h5 className="card-title">{name}: {qty}</h5>
    </div>
  );
}
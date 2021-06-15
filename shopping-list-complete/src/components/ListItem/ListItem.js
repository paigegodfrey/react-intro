import React from "react";

const ListItem = ({ item }) => {

  const { name, qty } = item;

  return (
    <div className="ListItem">
      <h5 className="card-title">{name}: {qty}</h5>
    </div>
  );
}

export default ListItem;

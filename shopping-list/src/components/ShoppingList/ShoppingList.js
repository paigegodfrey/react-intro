import React, { useState } from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
// import ListItem from "../ListItem/ListItem";
import './ShoppingList.css'
import { v4 as uuid } from 'uuid';

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    let newItem = { ...item, id: uuid() };
    setItems(items => [...items, newItem]);
  };

  return (
    <div className={`ShoppingList ${items.length ? "list-filled" : "list-empty"}`}>
      <h1>Shopping List</h1>
      <ListItemForm addItem={addItem} />
      {/* map over ListItem */}
      {/* if no items show message */}
    </div>
  );
}


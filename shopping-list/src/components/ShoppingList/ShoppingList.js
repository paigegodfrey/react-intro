import React, { useState } from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
import './ShoppingList.css'
import { v4 as uuid } from 'uuid';

function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = item => {
    let newItem = { ...item, id: uuid() };
    setItems(items => [...items, newItem]);
  };

  return (
    <div className="ShoppingList">
      <h1>Shopping List</h1>
      <ListItemForm addItem={addItem} />
      {items.map(item => (
        <ListItem item={item} key={item.id} />
      ))}
    </div>
  );
};

export default ShoppingList;

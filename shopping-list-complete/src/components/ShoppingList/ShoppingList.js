import React, { useState } from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
import './ShoppingList.css'

// creates unique id (used for key prop on line 27)
import { v4 as uuid } from 'uuid';

export default function ShoppingList() {
  const [items, setItems] = useState([]);

  // arrow function to add new item 
  // function passed as prop to ListItemForm (line 24)
  const addItem = item => {
    let newItem = { ...item, id: uuid() };
    setItems(items => [...items, newItem]);
  };

  // uses ternary operator for dynamic styling (line 22)
  // uses ternary operator to return ListItems or text if state is empty (lines 26-31)
  return (
    <div className={`ShoppingList ${items.length ? "list-filled" : "list-empty"}`}>
      <h1>Shopping List</h1>
      <ListItemForm addItem={addItem} />

      {items.length ? items.map(item => (
        <ListItem item={item} key={item.id} />
      ))
        :
        <h3>Your shopping list is empty!</h3> 
      }
    </div>
  );
}


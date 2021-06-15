import React from "react";
import ListItemForm from "../ListItemForm/ListItemForm";
import ListItem from "../ListItem/ListItem";
import './ShoppingList.css'

export default function ShoppingList() {
  return (
    <div className="ShoppingList">
      <h1>Shopping List</h1>
      <ListItemForm />
      {/* map over ListItem */}
      <ListItem />
      {/* if no items show message */}
    </div>
  );
}


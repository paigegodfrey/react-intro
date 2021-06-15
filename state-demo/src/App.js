import React from "react";
import ListItem from "./ListItem";

function App() {

  // THIS IS NOT STATE
  const defaultFoods = ['apple', 'banana', 'ice cream', 'salad'];

  return (
    <div className="App">
      {defaultFoods.map(foodItem => 
        <ListItem food={foodItem} />
      )}
    </div>
  );
}

export default App;

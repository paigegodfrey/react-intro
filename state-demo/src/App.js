import React from "react";
import ListItem from "./ListItem";

function App() {

  // THIS IS NOT STATE
  const defaultFoods = ['apple', 'banana', 'ice cream', 'salad'];

  return (
    <div className="App">
      {defaultFoods.map(food => 
        <ListItem food={food} />
      )}
    </div>
  );
}

export default App;

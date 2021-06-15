import React from "react";
import ListItem from "./ListItem";

function App() {
  return (
    <div className="App">
      <ListItem food="apple" quantity={6}/>
      <ListItem food="banana" quantity={2}/>
    </div>
  );
}

export default App;

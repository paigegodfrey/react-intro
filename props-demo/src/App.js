import React from "react";
import ListItem from "./ListItem";

function App() {
  return (
    <div className="App">
      <ListItem food="apple" quantity={100}/>
      <ListItem food="banana" quantity={50}/>
      <ListItem food="cat food" quantity={10}/>
      <ListItem food="banana" quantity={10}/>
      <ListItem food="ice cream" quantity={1}/>
    </div>
  );
}

export default App;

import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [isdarkMode, setIsDarkMode] = useState(false);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const appClass = isdarkMode ? "App dark" : "App light"

  function darkModeHandler() {
    setIsDarkMode(appClass);
  };

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={darkModeHandler}>Dark Mode</button>
        <div className="App dark"></div>
        <div className="App light"></div>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

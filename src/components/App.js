import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);


  const [darkOn, setDarkOn] = useState(false)
  
  const handleClick = () => {
    setDarkOn((darkOn) => !darkOn )
  }

  const appClass = darkOn ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{ darkOn ? "Light Mode" : "Dark Mode" }</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;

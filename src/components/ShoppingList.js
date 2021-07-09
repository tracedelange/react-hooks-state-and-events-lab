import React, { useState } from "react";
import Item from "./Item";


function ShoppingList({ items }) {


  const [cart, setCart] = useState([])

  const handleAddToCart = (name) => { 
    setCart((cart) => [...cart, name])
  }

  const [selectedCategory, setSelectedCategory] = useState('')

  const handleFilterChange = (e) => {
    setSelectedCategory(() => e.target.value)
  }

  let filteredItems = items.filter((item) => item.category === selectedCategory)

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={ handleFilterChange } name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item 
          handleAddToCart={ handleAddToCart } 
          key={item.id} 
          name={item.name} 
          category={item.category} 
          isInCart={cart.includes(item.name)} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

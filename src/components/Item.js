import React, { useState } from "react";

function Item({ name, category , handleAddToCart, isInCart}) {

  return (
    <li className={isInCart ? "in-cart" : ""}> 
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={ () => {handleAddToCart(name)} } className="add">Add to Cart</button>
    </li>
  );
}

export default Item;

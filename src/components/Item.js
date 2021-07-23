import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState("");

  function inCartHandler() {
    const newIsInCart = isInCart ? "" : "in-cart"
    console.log(newIsInCart)
    setIsInCart(newIsInCart);
  };
  
  return (
    <li className={isInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={inCartHandler} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;

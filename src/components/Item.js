import React, {useState} from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function inCartHandler() {
    setIsInCart((isInCart) => <li className="in-cart"></li>)
  };
  
  return (
    <li className="">
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={inCartHandler} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;

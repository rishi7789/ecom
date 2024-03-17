import React, { useState } from "react";
import Card from "../components/Card";
import Home from "./Home";

const Cart = ({ cart }) => {
  const [cartItems, setCartItems] = useState(cart.map(item => ({ ...item, quantity: 1 })));


  const incrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity++;
    setCartItems(updatedCart);
  };

  
  const decrementQuantity = (index) => {
    const updatedCart = [...cartItems];
    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity--;
      setCartItems(updatedCart);
    }
  };


  const removeItem = (index) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
  };

  
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div>
      <h1>Cart</h1>
      <ul className="list-group">
        {cartItems.map((item, index) => (
          <li className="list-group-item" key={index}>
            <div className="row">
              <div className="col">{item.productname}</div>
              <div className="col">
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => decrementQuantity(index)}
                >
                  -
                </button>{" "}
                {item.quantity}{" "}
                <button
                  className="btn btn-primary btn-sm"
                  onClick={() => incrementQuantity(index)}
                >
                  +
                </button>
              </div>
              <div className="col">{item.price * item.quantity}</div>
              <div className="col">
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => removeItem(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-3">Total Price: {totalPrice}</div>
    </div>
  );
};

export default Cart;

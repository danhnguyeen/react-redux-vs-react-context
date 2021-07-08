import React from "react";

import MainNavigation from "../components/MainNavigation";
import { useShop, useCount } from "../context";

import "./Cart.css";

function CartPage() {
  const shopContext = useShop();
  const countContext = useCount();

  return (
    <React.Fragment>
      <MainNavigation
        cartItemNumber={shopContext.cart.reduce((count, curItem) => {
          return count + curItem.quantity;
        }, 0)}
      />
      <main className="cart">
        <strong>Count is {countContext.count}</strong>
        <button onClick={countContext.addCount}>Add</button>
        {shopContext.cart.length <= 0 && <p>No Item in the Cart!</p>}
        <ul>
          {shopContext.cart.map((cartItem) => (
            <li key={cartItem.id}>
              <div>
                <strong>{cartItem.title}</strong> - ${cartItem.price} (
                {cartItem.quantity})
              </div>
              <div>
                <button
                  onClick={shopContext.removeProductFromCart.bind(
                    this,
                    cartItem.id
                  )}
                >
                  Remove from Cart
                </button>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </React.Fragment>
  );
}

export default CartPage;

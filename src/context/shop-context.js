import React, { useState } from "react";

export const ShopContext = React.createContext({
  products: [],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

const ShopContextProvider = ({ children }) => {
  const [products] = useState([
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 },
  ]);
  const [cart, setCart] = useState([]);

  const addProductToCart = (product) => {
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex(
      (item) => item.id === product.id
    );

    if (updatedItemIndex < 0) {
      updatedCart.push({ ...product, quantity: 1 });
    } else {
      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity++;
      updatedCart[updatedItemIndex] = updatedItem;
    }
    setCart(updatedCart);
  };

  const removeProductFromCart = (id) => {
    const updatedCart = [...cart];
    const updatedItemIndex = updatedCart.findIndex((item) => item.id === id);

    const updatedItem = {
      ...updatedCart[updatedItemIndex],
    };
    updatedItem.quantity--;
    if (updatedItem.quantity <= 0) {
      updatedCart.splice(updatedItemIndex, 1);
    } else {
      updatedCart[updatedItemIndex] = updatedItem;
    }

    setCart(updatedCart);
  };
  return (
    <ShopContext.Provider
      value={{ products, cart, addProductToCart, removeProductFromCart }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default ShopContextProvider;

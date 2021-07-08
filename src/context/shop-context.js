import React, { useContext, useReducer } from "react";

import shopReducer, { ADD_PRODUCT, REMOVE_PRODUCT } from "./shop-reducers";

const initialState = { cart: [] };

export const ShopContext = React.createContext({
  products: [],
  cart: [],
  addProductToCart: () => {},
  removeProductFromCart: () => {},
});

export const ShopContextProvider = ({ children }) => {
  const products = [
    { id: "p1", title: "Gaming Mouse", price: 29.99 },
    { id: "p2", title: "Harry Potter 3", price: 9.99 },
    { id: "p3", title: "Used plastic bottle", price: 0.99 },
    { id: "p4", title: "Half-dried plant", price: 2.99 },
  ];
  const [cartState, dispatch] = useReducer(shopReducer, initialState);

  const addProductToCart = (product) => {
    setTimeout(() => {
      dispatch({ type: ADD_PRODUCT, product });
    }, 700);
  };

  const removeProductFromCart = (id) => {
    setTimeout(() => {
      dispatch({ type: REMOVE_PRODUCT, id });
    }, 700);
  };

  return (
    <ShopContext.Provider
      value={{
        products,
        cart: cartState.cart,
        addProductToCart,
        removeProductFromCart,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

const useShop = () => {
  const contextValue = useContext(ShopContext);
  return contextValue;
}

export default useShop;
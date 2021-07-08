import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductsPage from "./pages/Products";
import ShopContextProvider from "./context/shop-context";
import CountContextProvider from "./context/count-context";
import CartPage from "./pages/Cart";
import "./App.css";

function App() {
  console.log('render')
  return (
    <ShopContextProvider>
      <CountContextProvider>
        <BrowserRouter>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/cart" component={CartPage} exact />
          </Switch>
        </BrowserRouter>
      </CountContextProvider>
    </ShopContextProvider>
  );
}

export default App;

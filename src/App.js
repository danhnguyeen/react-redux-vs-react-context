import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductsPage from "./pages/Products";
import ShopContextProvider from "./context/shop-context";
import CartPage from "./pages/Cart";
import "./App.css";

function App() {
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={ProductsPage} exact />
          <Route path="/cart" component={CartPage} exact />
        </Switch>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

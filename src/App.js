import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ProductsPage from "./pages/Products";
import { ShopContextProvider } from "./context/shop-context";
import { CountContextProvider } from "./context/count-context";
import CartPage from "./pages/Cart";
import "./App.css";

function App() {
  console.log("render");
  return (
    <ShopContextProvider>
      <BrowserRouter>
        <CountContextProvider>
          <Switch>
            <Route path="/" component={ProductsPage} exact />
            <Route path="/test-context" component={CartPage} exact />
          </Switch>
        </CountContextProvider>
        <Switch>
          <CountContextProvider>
            <Route path="/cart" component={CartPage} exact />
          </CountContextProvider>
        </Switch>
      </BrowserRouter>
    </ShopContextProvider>
  );
}

export default App;

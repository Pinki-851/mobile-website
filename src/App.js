import React from "react";
import ProductView from "./components/productDetail/ProductView";
import Product from "./components/productDetail/Product";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Product} />
        <Route exact path="/productdetail" component={ProductView} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

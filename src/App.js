import React from "react";
import ProductView from "./components/productDetail/ProductView";
import Product from "./components/productDetail/Product";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store/rootReducer";

function App() {
  const store = createStore(rootReducer);

  return (
    <>
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path="/" component={Product} />
            <Route exact path="/productdetail" component={ProductView} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;

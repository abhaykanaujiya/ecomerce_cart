import React from "react";
import "./index.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductList from "./components/homepage/ProductList";
import Header from "./Header";
import Cart from "./components/cart_page/Cart";

export default function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route path="/" exact component={ProductList} />
        <Route path="/cart" exact component={Cart} />
        <Route path="/home" component={ProductList} />
      </Switch>
    </Router>
  );
}

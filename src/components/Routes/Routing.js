import React from "react";
import ProductList from "../homepage/ProductList";
import Cart from "../cart_page/Cart";
import { Route, Routes } from "react-router-dom";
import Main from "../homepage/Main";

export default function Routing({ productItems, cartItems, handleAddProduct }) {
  return (
    <div className="routes">
      <Routes>
        <Route path="/productList" element={<Main />} />
        <Route
          path="/cart"
          element={<Cart handleAdd={handleAddProduct} cartItems={cartItems} />}
        />
      </Routes>
    </div>
  );
}
//  productItems = { productItems };
//  handleAdd = { handleAddProduct };

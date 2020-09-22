import React, { useState, useEffect } from "react";
import { Redirect } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./styles.css";
import Home from "./Components/Home";
import Products from "./Components/Products";
import Signin from "./Components/Signin";
import Navigation from "./Components/Navigation";
import ProtectedRoute from "./Components/ProtectedRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import Default from "./Components/pageNotfound";
import Cart from "./Components/Cart";
import ProductDetail from "./Components/ProductDetail";
import data from "./Components/data.js";
import { connect } from "react-redux";

function App(props) {
  const { user, count, amount, product_cart, filteredList, products } = props;
  // let [list, setList] = useState(products);
  //console.log(list);
  // function handlefilterList() {
  //   //console.log("searchList:", list);
  //   setList(list);
  // }
  //useEffect(() => setList(filteredList));
  //console.log("nvd", filteredList);
  let list = { products };
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation
          value={user}
          count={count}
          // searchesList={handlefilterList}
        />
        <Switch>
          <Route exact path="/">
            <Home value={user} />
          </Route>
          <ProtectedRoute
            exact
            path="/products"
            component={Products}
            value={user}
            //setProducts={filteredList}
            //list={filteredList}
          />
          <Route
            path="/signin"
            render={(props) => {
              console.log(props);
              if (user) {
                return <Redirect to="/" />;
              } else {
                return <Signin {...props} user={user} />;
              }
            }}
          />
          <Route
            path="/cart"
            render={(props) => (
              <Cart
                {...props}
                numOfItems={count}
                amount={amount}
                products={product_cart}
              />
            )}
          />
          <Route
            path="/productDetail/:id"
            render={(props) => <ProductDetail {...props} />}
          />
          <Route component={Default} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  //console.log("state:", state.products);
  console.log("list", state.filteredList);
  return {
    products: state.products,
    user: state.user,
    count: state.count,
    amount: state.amount,
    product_cart: state.product_cart,
    filteredList: state.filteredList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);

// let [count, setCount] = useState(0);
// let [product, setProduct] = useState([]);
// let [amount, setAmount] = useState(0);
// function handleClickCarts(prodduct) {
//   console.log("Hi.. I am clicked");
//   const n = count + parseInt(prodduct.quantity);
//   const amt = amount + prodduct.price;
//   setAmount(amt);
//   setCount(n);
//   setProduct((prevValue) => {
//     return [...prevValue, prodduct];
//   });
// }

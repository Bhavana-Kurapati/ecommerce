import React, { useState } from "react";
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
  const { user } = props;
  let [count, setCount] = useState(0);
  let [product, setProduct] = useState([]);
  let [amount, setAmount] = useState(0);
  function handleClickCarts(prodduct) {
    console.log("Hi.. I am clicked");
    const n = count + parseInt(prodduct.quantity);
    const amt = amount + prodduct.price;
    setAmount(amt);
    setCount(n);
    setProduct((prevValue) => {
      return [...prevValue, prodduct];
    });
  }
  let [list, setList] = useState(data);
  function handlefilterList(list) {
    console.log("searchList:", list);
    setList(list);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Navigation
          value={user}
          count={count}
          searchesList={handlefilterList}
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
            setProducts={handlefilterList}
            // list={list}
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
                products={product}
              />
            )}
          />
          <Route
            path="/productDetail/:id"
            render={(props) => (
              <ProductDetail {...props} handleClickCart={handleClickCarts} />
            )}
          />
          <Route component={Default} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps)(App);

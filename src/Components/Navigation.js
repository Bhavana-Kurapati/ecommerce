import React from "react";
import "./Navigation.css";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import "./footer.css";
import { connect } from "react-redux";
import {
  Nav,
  Navbar,
  NavItem,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import data from "./data.js";

function Navigation(props) {
  const dataList = [...new Set(data.map((data) => data.title))];
  console.log("dataList", dataList);
  function handleClick(event) {
    const action = {
      type: "LOGOUT",
      payload: props.user,
    };
    props.dispatch(action);
    if (!props.value) {
      return <Redirect to="/" />;
    }
  }
  function handleChange() {
    const value = document.getElementById("input").value;
    let currentList = [];
    let newList = [];
    if (value !== "") {
      currentList = dataList;
      newList = currentList.filter((item) => {
        const lowercase = item.toLowerCase();
        return lowercase.includes(value.toLowerCase());
      });
    } else {
      newList = dataList;
    }
    console.log("list: ", newList);
    const filteredList = data.filter((product) => {
      if (newList.includes(product.title)) {
        return true;
      }
    });
    console.log("filList", filteredList);

    props.searchesList(filteredList);
  }
  return (
    <div className="nav-container">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <Link to="/">Hamsa</Link>
        </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/products">Products</Link>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Form inline>
              <FormControl
                id="input"
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <Button onClick={handleChange} variant="outline-info">
                Search
              </Button>
            </Form>
            <Nav.Link>
              {!props.value ? (
                <Link to="/cart">Cart({props.count})</Link>
              ) : (
                <Link to="/cart">My Cart({props.count})</Link>
              )}
            </Nav.Link>
            <Nav.Link>
              <Link to="/pricing">Wishlist</Link>
            </Nav.Link>
            <Nav.Link>
              {!props.value ? (
                <Link to="/signin">Signin</Link>
              ) : (
                <NavItem onClick={handleClick}>signout</NavItem>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};
export default connect(null, mapDispatchToProps)(Navigation);

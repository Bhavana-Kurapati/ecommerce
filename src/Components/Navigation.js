import React from "react";
import "./Navigation.css";
import { Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./footer.css";
//import styled from "styled-components";
import { connect } from "react-redux";
import {
  Nav,
  Navbar,
  NavItem,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { faSearchengin } from "@fortawesome/free-brands-svg-icons";
import data from "./data.js";
import { useState } from "react";

function Navigation(props) {
  //const [searchList, setList] = useState([]);

  const dataList = [...new Set(data.map((data) => data.title))];
  console.log("dataList", dataList);

  function handleClick(event) {
    //props.onSignout();
    // if (!props.value.isLoggedIn) {
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
    //if (event.target.value !== "") {
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
    //setList(filteredList);
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
            {/* <Nav.Link>
              <Link to="/pricing">Pricing</Link>
            </Nav.Link> */}
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
                {/* <FontAwesomeIcon
                  icon={faSearchengin}
                  className="fas footer-icons"
                /> */}
                Search
              </Button>
            </Form>

            <Nav.Link>
              {/* {!props.value.isLoggedIn ? ( */}
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
              {/* {!props.value.isLoggedIn ? ( */}
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

// <Navbar bg="dark" variant="dark">
//   <Navbar.Brand href="#home">Navbar</Navbar.Brand>
//   <Nav className="mr-auto">
//     <Nav.Link href="#home">Home</Nav.Link>
//     <Nav.Link href="#features">Features</Nav.Link>
//     <Nav.Link href="#pricing">Pricing</Nav.Link>
//   </Nav>
//   <Form inline>
//     <FormControl type="text" placeholder="Search" className="mr-sm-2" />
//     <Button variant="outline-info">Search</Button>
//   </Form>
// </Navbar>;
// {
//   /*
//       <ul>
//         <Link to="/">
//           <li>Home</li>
//         </Link>
//         <Link to="/products">
//           <li>Products</li>
//         </Link>
//         {!props.value.isLoggedIn ? (
//           <Link to="/signin">
//             <li>Signin</li>
//           </Link>
//         ) : (
//           //<Signout />
//           <button onClick={handleClick}>signout</button>
//           //() => console.log("Logged out")
//         )}
//       </ul> */
// }

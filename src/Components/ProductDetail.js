import React, { useState } from "react";
import { Link } from "react-router-dom";
import data from "./data.js";
import "./Product.css";
import RatingComponent from "react-star-rating-component";
import Reviews from "./Review";
import { Row, Col } from "react-bootstrap";
import {
  Nav,
  Navbar,
  NavItem,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";
import { connect } from "react-redux";

function ProductDetail(props) {
  const product = data.find((y) => y.id === props.match.params.id);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  function handleClick() {
    const quantity = document.getElementById("quantity").value;
    product.quantity = quantity;
    const action = {
      type: "ADD_CART",
      payload: product,
    };
    // console.log(action);
    props.dispatch(action);
  }
  function onStarClick(nextValue, prevValue, name) {
    setRating(nextValue);
    product.rating = nextValue;
  }
  function addReview(review) {
    setReviews((prevValue) => {
      return [...prevValue, review];
    });

    product.review = [...product.review, review];
    ++product.numOfReviews;
  }

  return (
    <div>
      <section className="detailSection">
        <div className="back-to-result">
          <Link to="/products">
            <button className="btn btn-primary btn-md mr-1 mb-2">
              Go back to products
            </button>
          </Link>
        </div>
        <Row>
          <Col md={6} mb={4} mb-md={0}>
            <div id="mdb-lightbox-ui"></div>

            <div className="details mdb-lightbox">
              <Row className="product-gallery mx-1">
                <div className="col-12 mb-0">
                  <figure className="view overlay rounded z-depth-1 main-img">
                    <img
                      className="img-fluid z-depth-1 details-image"
                      src={product.image}
                    />
                  </figure>
                </div>
              </Row>
            </div>
          </Col>
          <Col md={6}>
            <h3>{product.title}</h3>
            <p className="mb-2 text-muted text-uppercase small">moblies</p>
            <div className="rating">
              <div>
                <RatingComponent
                  name="ratel"
                  starCount={5}
                  value={product.rating}
                  onStarClick={onStarClick}
                />
                <p>
                  <a href="#reviews">({product.numOfReviews} reviews)</a>
                </p>
              </div>
            </div>
            <p>
              <span className="mr-1">
                <strong>${product.price}</strong>
              </span>
            </p>
            <p className="pt-1">
              <b>Description:</b> {product.description}
            </p>
            <div className="table-responsive">
              <table className="table table-sm table-borderless mb-0">
                <tbody>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Brand</strong>
                    </th>
                    <td>{product.brand}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Category</strong>
                    </th>
                    <td>{product.category}</td>
                  </tr>
                  <tr>
                    <th className="pl-0 w-25" scope="row">
                      <strong>Delivery</strong>
                    </th>
                    <td>USA, Europe</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <div className="table-responsive mb-2">
              <table class="table table-sm table-borderless">
                <tbody>
                  <tr>
                    <td class="pl-0 pb-0 w-25">Quantity</td>
                  </tr>
                  <tr>
                    <td>
                      <select id="quantity">
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                      </select>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <hr />
            <button type="button" className="btn btn-primary btn-md mr-1 mb-2">
              Buy now
            </button>
            <button
              type="button"
              onClick={handleClick}
              className="btn btn-light btn-md mr-1 mb-2"
            >
              <i class="fas fa-shopping-cart pr-2"></i>Add to cart
            </button>
          </Col>
        </Row>
      </section>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(null, mapDispatchToProps)(ProductDetail);
//export default ProductDetail;

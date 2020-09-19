import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Cart.css";
import {
  Card,
  CardDeck,
  CardImg,
  CardColumns,
  Container,
  Row,
  Col,
  CardGroup,
  Dropdown,
} from "react-bootstrap";

function Cart(props) {
  // return (
  //   <div>
  //     <h3>{props.numOfItems} items added in your Cart</h3>
  //     {props.products.map((product, index) => (
  //       <Link to={"/productDetail/" + product.id}>
  //         <div>
  //           <img src={product.image} />
  //           <h1>{product.title} added to the cart </h1>
  //         </div>
  //       </Link>
  //     ))}
  //   </div>
  // );
  const shipAmt = 3;
  return (
    <div>
      <h1 className="Cart">Shopping Cart</h1>
      <section class="cartSection">
        <Row>
          <Col lg={8}>
            {/* <Card> */}
            <div className="mb-3">
              <div className="pt-4 wish-list">
                <h3 className="mb-4">Cart ({props.numOfItems} items)</h3>
                {props.products.map((product, index) => (
                  <Row className="mb-4">
                    <Col md={5} lg={3} xl={3}>
                      <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                        <img className="img-fluid w-100" src={product.image} />
                        <a href="#!" />
                      </div>
                    </Col>
                    <Col md={7} lg={9} xl={9}>
                      <div>
                        <div className="d-flex justify-content-between">
                          <div>
                            <Link to={"/productDetail/" + product.id}>
                              <h3 className="title">{product.title}</h3>
                            </Link>
                            <p className="mb-3 text-muted text-uppercase small">
                              Brand: {product.brand}
                            </p>
                            <p className="mb-3 text-muted text-uppercase small">
                              Category: {product.category}
                            </p>
                          </div>
                          {/* <div className="def-number-input number-input safari_only mb-0 w-100">
                            <p>Quantity: {product.numOfItems}</p>
                          </div> */}
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                          <div>
                            <a
                              href="#!"
                              type="button"
                              className="card-link-secondary small text-uppercase mr-3"
                            >
                              <i className="fas fa-trash-alt mr-1"></i> Remove
                              item
                            </a>
                            <a
                              href="#!"
                              type="button"
                              className="card-link-secondary small text-uppercase"
                            >
                              <i className="fas fa-heart mr-1"></i> Move to wish
                              list{" "}
                            </a>
                          </div>
                          <p class="mb-0">
                            <span>
                              <strong id="summary">${product.price}</strong>
                            </span>
                          </p>
                        </div>
                      </div>
                    </Col>
                  </Row>
                ))}
                <hr className="mb-4" />
              </div>
            </div>
            {/* </Card> */}
            {/* </Card> */}
            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-4">Expected shipping delivery</h5>
                <p className="mb-4"> Thu., 12.03. - Mon., 16.03.</p>
              </div>
            </div>
            {/* </Card> */}
            {/* </Card> */}
            <div className="mb-3">
              <div className="pt-4">
                <h5 className="mb-4">We accept</h5>
                <div className="mb-4">
                  <img
                    className="mr-2"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    className="mr-2"
                    // width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    className="mr-2"
                    //width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    className="mr-2"
                    //width="45px"
                    src="https://mdbootstrap.com/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.png"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            {/* </Card> */}
          </Col>
          <Col lg={4}>
            <div className="mb-3">
              <div className="pt-4">
                <h3 class="mb-3">The total amount of</h3>
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                    Temporary amount
                    <span>$ {props.amount}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                    Shipping
                    <span>{shipAmt}</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                    <div>
                      <strong>The total amount of</strong>
                      <strong>
                        <p class="mb-0">(including VAT)</p>
                      </strong>
                    </div>
                    <span>
                      <strong>$ {props.amount + shipAmt}</strong>
                    </span>
                  </li>
                </ul>
                <button type="button" class="btn btn-primary btn-block">
                  go to checkout
                </button>
              </div>
            </div>
            <div class="mb-3">
              <div class="pt-4">
                <a
                  class="dark-grey-text d-flex justify-content-between"
                  data-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  Add a discount code (optional)
                  <span>
                    <i class="fas fa-chevron-down pt-1"></i>
                  </span>
                </a>

                <div class="collapse" id="collapseExample">
                  <div class="mt-3">
                    <div class="md-form md-outline mb-0">
                      <input
                        type="text"
                        id="discount-code"
                        class="form-control font-weight-light"
                        placeholder="Enter discount code"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </section>
    </div>
  );
}

export default Cart;

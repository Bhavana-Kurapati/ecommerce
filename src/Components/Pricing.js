import React, { Component } from "react";
import "./pricing.css";
import { Row, Col } from "react-bootstrap";
function Pricing() {
  return (
    <section class="white-section" id="pricing">
      <h2 class="section-heading">Subscription Details</h2>
      <p>Simple and affordable price plans</p>

      {/* <div class="row"> */}
      <Row>
        <Col lg={4} md={12}>
          {/* col-lg-4 col-md-12 */}
          <div class="pricing-coloum">
            <div class="card">
              <div class="card-header">
                <h3>Casual</h3>
              </div>
              <div class="card-body">
                <h2 class="price-text">Free</h2>
                <p>5 Matches Per Day</p>
                <p>10 Messages Per Day</p>
                <p>Unlimited App Usage</p>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-dark"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </Col>
        <div class="pricing-coloum col-lg-4 col-md-6">
          <div class="card">
            <div class="card-header">
              <h3>Prime</h3>
            </div>
            <div class="card-body">
              <h2 class="price-text">$49 / mo</h2>
              <p>Unlimited Matches</p>
              <p>Unlimited Messages</p>
              <p>Unlimited App Usage</p>
              <button type="button" class="btn btn-lg btn-block btn-dark">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* </div> */}
      </Row>
    </section>
  );
}

export default Pricing;

{
  /* <section class="white-section" id="pricing">
  <h2 class="section-heading">A Plan for Every Dog's Needs</h2>
  <p>Simple and affordable price plans for your and your dog.</p>

  <div class="row">
    <div class="pricing-coloum col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3>Chihuahua</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">Free</h2>
          <p>5 Matches Per Day</p>
          <p>10 Messages Per Day</p>
          <p>Unlimited App Usage</p>
          <button type="button" class="btn btn-lg btn-block btn-outline-dark">
            Sign Up
          </button>
        </div>
      </div>
    </div>
    <div class="pricing-coloum col-lg-4 col-md-6">
      <div class="card">
        <div class="card-header">
          <h3>Labrador</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">$49 / mo</h2>
          <p>Unlimited Matches</p>
          <p>Unlimited Messages</p>
          <p>Unlimited App Usage</p>
          <button type="button" class="btn btn-lg btn-block btn-dark">
            Sign Up
          </button>
        </div>
      </div>
    </div>
    <div class="pricing-coloum col-lg-4">
      <div class="card">
        <div class="card-header">
          <h3>Mastiff</h3>
        </div>
        <div class="card-body">
          <h2 class="price-text">$99 / mo</h2>
          <p>Pirority Listing</p>
          <p>Unlimited Matches</p>
          <p>Unlimited Messages</p>
          <p>Unlimited App Usage</p>
          <button type="button" class="btn btn-lg btn-block btn-dark">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </div>
</section>; */
}

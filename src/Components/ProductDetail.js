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

function ProductDetail(props) {
  console.log(props.match.params.id);
  const product = data.find((y) => y.id === props.match.params.id);
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  // product.review = reviews;
  function handleClick() {
    //const amount = amount + product.price;
    const quantity = document.getElementById("quantity").value;
    product.quantity = quantity;
    props.handleClickCart(product);
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
  ///console.log(product.review);
  // var e = document.getElementById("quantity").value;
  //console.log(e);

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
        {/* <div className="classic-tabs border rounded px-4 pt-1">
          <ul
            className="nav tabs-primary nav-justified"
            id="advancedTab"
            role="tablist"
          >
            <li className="nav-item">
              <NavItem>
                <a
                  className="active show"
                  id="description-tab"
                  data-toggle="tab"
                  href="#description"
                  role="tab"
                  aria-controls="description"
                  aria-selected="true"
                >
                  <Nav.Link>Description</Nav.Link>
                </a>
              </NavItem>
            </li>
            <li className="nav-item">
              <NavItem>
                <a
                  id="info-tab"
                  data-toggle="tab"
                  // href="#info"
                  role="tab"
                  aria-controls="info"
                  aria-selected="false"
                >
                  <Nav.Link>
                    <Link to={"/productDetail/" + product.id + "/#info"}>
                      Information
                    </Link>
                  </Nav.Link>
                </a>
              </NavItem>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="reviews-tab"
                data-toggle="tab"
                href="#reviews"
                role="tab"
                aria-controls="reviews"
                aria-selected="false"
              >
                Reviews({product.numOfReviews})
              </a>
            </li>
          </ul>
          <div class="tab-content" id="advancedTabContent">
            <div
              class="tab-pane fade show active"
              id="description"
              role="tabpanel"
              aria-labelledby="description-tab"
            >
              <h5>Product Description</h5>
              <p class="small text-muted text-uppercase mb-2">mobiles</p>
              <div className="rating">
                <RatingComponent
                  name="ratel"
                  starCount={5}
                  value={product.rating}
                  onStarClick={onStarClick}
                />
              </div>
              <h6>${product.price}</h6>
              <p class="pt-1">{product.description}</p>
            </div>
            <div
              class="tab-pane fade"
              id="info"
              role="tabpanel"
              aria-labelledby="info-tab"
            >
              <h5>Additional Information</h5>
              <table class="table table-striped table-bordered mt-3">
                <thead>
                  <tr>
                    <th scope="row" class="w-150 dark-grey-text h6">
                      Weight
                    </th>
                    <td>
                      <em>0.3 kg</em>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row" class="w-150 dark-grey-text h6">
                      Dimensions
                    </th>
                    <td>
                      <em>50 × 60 cm</em>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div
              class="tab-pane fade"
              id="reviews"
              role="tabpanel"
              aria-labelledby="reviews-tab"
            >
              <h5>
                <span>1</span> review for <span>{product.title}</span>
              </h5>
              <div class="media mt-3 mb-4">
                <img
                  class="d-flex mr-3 z-depth-1"
                  src="https://mdbootstrap.com/img/Photos/Others/placeholder1.jpg"
                  width="62"
                  alt="Generic placeholder image"
                />
                <div class="media-body">
                  <div class="d-sm-flex justify-content-between">
                    <p class="mt-1 mb-2">
                      <strong>Marthasteward </strong>
                      <span>– </span>
                      <span>January 28, 2020</span>
                    </p>
                  </div>
                  <p class="mb-0">Nice one, love it!</p>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
    </div>
  );
}
export default ProductDetail;

{
  /* <Row>
<Col md={6} mb={4} mb-md={0}>
  <div id="mdb-lightbox-ui"></div>
  <div class="mdb-lightbox"></div>
  <div className="details">
    <div className="details-image">
      <img src={product.image} />
    </div>
    <div className="details-info">
      <ul>
        <li>
          <h3>{product.title}</h3>
        </li>
        <li>
          <div>Price: ${product.price}</div>
        </li>
        <li>
          <div>
            <b>Description:</b> {product.description}
          </div>
        </li>
        <li>
          Quantity:
          <select id="quantity">
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
          </select>
        </li>

        <li>
          <div>
            <p>Rating: {product.rating}</p>
            <RatingComponent
              name="ratel"
              starCount={5}
              value={product.rating}
              onStarClick={onStarClick}
            />
          </div>
          <a href="#reviews">{product.numOfReviews} reviews</a>
        </li>
        <li>
          <button onClick={handleClick}>Add to cart</button>
        </li>
      </ul>
      <br />
      <br />
      <br />
      <br />
      <h2 id="reviews">Reviews</h2>
      <Reviews addReview={addReview} />
      {product.review.map((review, index) => {
        return (
          <div className="review">
            <h1>
              {index + 1}.{product.review[index].name}
            </h1>
            <p>{product.review[index].content}</p>
          </div>
        );
      })}
    </div>
  </div>
</Col>
</Row>
</section>
</div>
); */
}
{
  /* <br />
<br />
<br />
<br />
<h2 id="reviews">Reviews</h2>
<Reviews addReview={addReview} />
{product.review.map((review, index) => {
  return (
    <div className="review">
      <h1>
        {index + 1}.{product.review[index].name}
      </h1>
      <p>{product.review[index].content}</p>
    </div>
  );
})}
</div> */
}

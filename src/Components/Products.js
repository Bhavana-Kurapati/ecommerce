import React, { Component } from "react";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import productDetail from "./ProductDetail";
import { connect } from "react-redux";
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
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-regular-svg-icons";
import data from "./data.js";
import "./image.css";
import "./FilterBar.css";
import { useState } from "react";
import { Provider } from "react-redux";
import ProductDetail from "./ProductDetail";

function Products(props) {
  function handleFilter(filteredPriceData, checkedBrands, checkedCategory) {
    let filteredData = [];
    //console.log("filteredPriceData: ", filteredPriceData);
    //console.log("checkedBrands: ", checkedBrands);
    //console.log("checkedCategory: ", checkedCategory);
    if (checkedBrands.length === 0 && checkedCategory.length === 0) {
      filteredData = filteredPriceData;
    } else if (checkedBrands.length > 0 && checkedCategory.length === 0) {
      filteredData = filteredPriceData.filter((data) =>
        checkedBrands.includes(data.brand)
      );
    } else if (checkedBrands.length === 0 && checkedCategory.length > 0) {
      filteredData = filteredPriceData.filter((data) =>
        checkedCategory.includes(data.category)
      );
    } else if (checkedBrands.length > 0 && checkedCategory.length > 0) {
      filteredData = filteredPriceData.filter(
        (data) =>
          checkedBrands.includes(data.brand) &&
          checkedCategory.includes(data.category)
      );
    }
    //console.log(filteredData);
    props.setProducts(filteredData);
  }

  console.log(props.list);

  return (
    <div className="mainFrame">
      <FilterBar handleFilter={handleFilter} />
      <div className="mainFrame-products">
        <h3 class="products-title">Products</h3>
        <CardGroup className="container">
          {/* <Container> */}
          <Row>
            {props.list.map((data) => {
              return (
                <Col md={4} sm={6} xs={12}>
                  <Card className="product">
                    <Link to={"/productDetail/" + data.id}>
                      <CardImg variant="top" src={data.image} />
                    </Link>

                    <Card.Body>
                      <Card.Title>
                        <Link to={"/productDetail/" + data.id}>
                          {data.title}
                        </Link>
                      </Card.Title>
                      {/* <Card.Title>{data.title}</Card.Title> */}
                      <Card.Text>{data.brand}</Card.Text>
                      <hr />
                      <Card.Text>${data.price}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm mr-1 mb-2"
                      >
                        <i class="fas fa-shopping-cart pr-2"></i>Add to cart
                      </button>
                      <Link to={"/productDetail/" + data.id}>
                        <button
                          type="button"
                          class="btn btn-light btn-sm mr-1 mb-2"
                        >
                          <i class="fas fa-info-circle pr-2"></i>Details
                        </button>
                      </Link>
                      <button
                        type="button"
                        class="btn btn-primary btn-sm px-3 mb-2 material-tooltip-main"
                        data-toggle="tooltip"
                        data-placement="top"
                        title="Add to wishlist"
                      >
                        <i class="fa fa-heart"></i>
                      </button>
                    </Card.Footer>
                  </Card>
                </Col>
              );
            })}
          </Row>
          {/* </Container> */}
        </CardGroup>
      </div>
    </div>
  );
}
// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     user: state.user,
//   };
// };
// export default connect(mapStateToProps)(Products);
export default Products;

{
  /* <div className="mainFrame-filters">
        <div className="filters-title">Apply Filters</div>
        <div className="filters-content">
          <div>
            <div className="filters">
              <h6>Lorem ipsum</h6>
            </div>
            <div>
              <input type="checkbox" id="new" />
              <label for="new">New</label>
            </div>
            <div>
              <input type="checkbox" id="new" />
              <label for="new">New</label>
            </div>
            <div>
              <input type="checkbox" id="new" />
              <label for="new">New</label>
            </div>
            <div>
              <input type="checkbox" id="new" />
              <label for="new">New</label>
            </div>
          </div>
          <div>
            <div className="filters">
              <h6>Lorem ipsum</h6>
            </div>
            <div>
              <input type="radio" name="price" />
              <label for="new">All</label>
            </div>
            <div>
              <input type="radio" name="price" />
              <label for="new">under 25 dollars</label>
            </div>
            <div>
              <input type="radio" name="price" />
              <label for="new">25 - 50 dollars</label>
            </div>
            <div>
              <input type="radio" name="price" />
              <label for="new">50 - 100 dollars</label>
            </div>
            <div>
              <input type="radio" name="price" />
              <label for="new">100 and above dollars</label>
            </div>
            <form>
              <div>
                <div>
                  <div>
                    <input type="text" id="from" />
                    <label for="from">$ Min</label>
                  </div>
                </div>
                <p>-</p>
                <div>
                  <div>
                    <input type="text" id="to" />
                    <label for="to">$ Max</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div>
            <div className="filters">
              <h6>Lorem ipsum</h6>
            </div>
            <div>
              <input type="checkbox" id="new" />
              <label for="new">32</label>
            </div>
            <div>
              <input type="checkbox" id="new" />
              <label for="new">34</label>
            </div>
            <div>
              <input type="checkbox" id="new" />
              <label for="new">36</label>
            </div>
            <div>
              <input type="checkbox" id="new" />
              <label for="new">38</label>
            </div>
            <a>More</a>
          </div>
          <div>
            <div className="filters">
              <h6>Lorem ipsum</h6>
            </div>
          </div>
        </div>
      </div> */
}

// <div className="mainFrame">
// <FilterBar handleFilter={handleFilter} />
// <div className="mainFrame-products">
//   <div class="products-title">Products</div>
//   <CardGroup className="container">
//     {/* <Container> */}
//     <Row>
//       {props.list.map((data) => {
//         {
//           /* {props.list.map((data) => { */
//         }
//         return (
//           <Col md={4} sm={6} xs={12}>
//             <Card className="product">
//               <Link to={"/productDetail/" + data.id}>
//                 <CardImg variant="top" src={data.image} />
//               </Link>

//               <Card.Body>
//                 <Card.Title>
//                   <Link to={"/productDetail/" + data.id}>
//                     {data.title}
//                   </Link>
//                 </Card.Title>
//                 {/* <Card.Title>{data.title}</Card.Title> */}
//                 <Card.Text>{data.brand}</Card.Text>
//                 <Card.Text>${data.price}</Card.Text>
//               </Card.Body>
//               <Card.Footer>
//                 <small className="text-muted">
//                   Last updated 3 mins ago
//                 </small>
//               </Card.Footer>
//             </Card>
//           </Col>
//         );
//       })}
//     </Row>
//     {/* </Container> */}
//   </CardGroup>
// </div>
// </div>
// );

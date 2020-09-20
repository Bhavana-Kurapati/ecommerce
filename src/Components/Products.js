import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import { Card, CardImg, Row, Col, CardGroup } from "react-bootstrap";
import "./image.css";
import data from "./data.js";
import { connect } from "react-redux";
import "./Product.css";
import "./FilterBar.css";

function Products(props) {
  useEffect(() => {
    const action = {
      type: "FETCH_PRODUCTS",
      payload: data,
    };
    props.dispatch(action);
  });
  function handleFilter(filteredPriceData, checkedBrands, checkedCategory) {
    let filteredData = [];

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

    props.setProducts(filteredData);
  }
  console.log("products", props.products);
  return (
    <div className="mainFrame">
      <FilterBar handleFilter={handleFilter} />
      <div className="mainFrame-products">
        <h3 class="products-title">Products</h3>
        <CardGroup className="container">
          <Row>
            {props.products.map((data) => {
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
        </CardGroup>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

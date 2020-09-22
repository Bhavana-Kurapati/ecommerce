import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import FilterBar from "./FilterBar";
import { Card, CardImg, Row, Col, CardGroup } from "react-bootstrap";
import "./image.css";
import data from "./data.js";
import { connect } from "react-redux";
import "./Product.css";
import "./FilterBar.css";

function Products(props) {
  const { products, filteredList } = props;

  console.log("Pro", products);
  let [list, setList] = useState(filteredList);

  useEffect(() => setList(filteredList), [filteredList]);
  useEffect(() => {
    const action = {
      type: "FETCH_PRODUCTS",
      payload: data,
    };
    props.dispatch(action);
  }, [products]);
  console.log("list::::", list);

  return (
    <div className="mainFrame">
      <FilterBar />
      <div className="mainFrame-products">
        <h3 class="products-title">Products</h3>
        <CardGroup className="container">
          <Row>
            {list.map((data) => {
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
    filteredList: state.filteredList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);

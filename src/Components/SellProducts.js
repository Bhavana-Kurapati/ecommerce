import React, { useState } from "react";
import { connect } from "react-redux";

function SellProducts(props) {
  const [product, setProduct] = useState({
    id: "",
    title: "",
    description: "",
    price: 0,
    brand: "",
    category: "",
    rating: 0,
    review: [],
    numOfReviews: 0,
    image: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setProduct((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }
  function handleClick(event) {
    const action = {
      type: "ADD_PRODUCTS",
      payload: product,
    };
    console.log("product:", action.payload);
    props.dispatch(action);
    setProduct({
      id: "",
      title: "",
      description: "",
      price: 0,
      brand: "",
      category: "",
      rating: 0,
      review: [],
      numOfReviews: 0,
      image: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="review_form">
        <input
          name="id"
          onChange={handleChange}
          value={product.id}
          placeholder="Product id.."
        />
        <input
          name="title"
          onChange={handleChange}
          value={product.title}
          placeholder="Product title.."
        />
        <textarea
          name="description"
          onChange={handleChange}
          value={product.description}
          placeholder="Product description.."
        />
        <input
          name="price"
          onChange={handleChange}
          value={product.price}
          placeholder="Product price.."
        />
        <input
          name="brand"
          onChange={handleChange}
          value={product.brand}
          placeholder="Product brand.."
        />
        <input
          name="category"
          onChange={handleChange}
          value={product.category}
          placeholder="Product category.."
        />
        <input
          name="rating"
          onChange={handleChange}
          value={product.rating}
          placeholder="Product rating.."
        />
        <input
          name="review"
          onChange={handleChange}
          value={product.review}
          placeholder="Product review.."
        />
        <input
          name="numOfReviews"
          onChange={handleChange}
          value={product.numOfReviews}
          placeholder="Product numOfReviews.."
        />
        <input
          name="image"
          onChange={handleChange}
          value={product.image}
          placeholder="Product image.."
        />
        <button onClick={handleClick}>Add Product</button>
      </form>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch,
  };
};

export default connect(null, mapDispatchToProps)(SellProducts);
//export default SellProducts;

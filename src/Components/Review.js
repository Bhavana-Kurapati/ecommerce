import React, { useState } from "react";
import "./Review.css";

function Reviews(props) {
  const [review, setReview] = useState({
    name: "",
    content: "",
  });
  //const [reviews, setReviews] = useState([]);
  function handleChange(event) {
    const { name, value } = event.target;
    //console.log(value);
    setReview((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  //function addReview() {}
  function submitReview(event) {
    props.addReview(review);
    setReview({
      name: "",
      content: "",
    });
    event.preventDefault();
  }
  return (
    <div>
      <form className="review_form">
        <input
          name="name"
          onChange={handleChange}
          value={review.name}
          placeholder="Write your name..."
        />
        <br />
        <textarea
          name="content"
          onChange={handleChange}
          value={review.content}
          placeholder="Write a review..."
          rows="2"
        />
        <button onClick={submitReview}>Submit</button>
      </form>
    </div>
  );
}

export default Reviews;

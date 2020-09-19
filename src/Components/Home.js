import React from "react";
//import { Carousel } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";
import Footer from "./Footer";
import pen from "./image.css";
import { connect } from "react-redux";
function Home(props) {
  return (
    <div>
      <div> welcome {props.value} </div>
      <Carousel>
        <Carousel.Item style={{ height: "500px" }}>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            ///src={pen}
            src="https://miro.medium.com/max/3600/1*HSisLuifMO6KbLfPOKtLow.jpeg"
            alt="First slide"
          />
          <Carousel.Caption>
            <h1>welcome {props.value}</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src="https://picsum.photos/800/400?text=Second slide&bg=282c34"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>welcome {props.value}</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{ height: "500px" }}>
          <img
            style={{ height: "500px" }}
            className="d-block w-100"
            src="https://picsum.photos/800/400?text=Third slide&bg=20232a"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h1>welcome {props.value}</h1>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Footer />
    </div>
  );
}

// const mapStateToProps = (state) => {
//   console.log(state);
//   return {
//     user: state.user,
//   };
// };
//export default connect(mapStateToProps)(Home);
export default Home;

//src="holder.js/800x400?text=Second slide&bg=282c34"

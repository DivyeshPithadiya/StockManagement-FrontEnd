import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Segment } from "semantic-ui-react";
import img1 from "./images/slider7.jpeg";
import img2 from "./images/slider5.jpeg";
import img3 from "./images/slider6.jpg";
import "./css/page.css";

export default function Slider() {
  return (
    <Carousel interval={3000} style={{ scrollBehavior: "smooth" }}>
      <Carousel.Item>
        <Carousel.Caption style={{ position: "absolute", top: "0px" }}>
          {/* <div
            className="background-dim1"
            style={{ borderRadius: "10px", width: "100%" }}
          >
            <h1>First slide label</h1>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div> */}
        </Carousel.Caption>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption style={{ position: "absolute", top: "0px" }}>
          {/* <div className="background-dim1" style={{ borderRadius: "10px" }}>
              <h1 style={{ marginTop: "15%" }}>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
        </Carousel.Caption>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <Carousel.Caption style={{ position: "absolute", top: "0px" }}>
          {/* <div className="background-dim1" style={{ borderRadius: "10px" }}>
              <h1 style={{ marginTop: "15%" }}>First slide label</h1>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </div> */}
        </Carousel.Caption>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

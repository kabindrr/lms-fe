import React from "react";
import { Carousel } from "react-bootstrap";
import Carousel1 from "../../assets/carouselImg/Carousel1.jpg";
import Carousel2 from "../../assets/carouselImg/Carousel2.jpg";
import Carousel3 from "../../assets/carouselImg/Carousel3.jpg";
import Carousel4 from "../../assets/carouselImg/Carousel4.jpg";
import Carousel5 from "../../assets/carouselImg/Carousel5.jpg";

export const CustomCarousel = () => {
  return (
    <>
      <Carousel className="mt-4">
        <Carousel.Item>
          <img src={Carousel1} alt="First slide" className="d-block w-200" />
          <Carousel.Caption className="carousel-caption-bg p-2 rounded">
            <h3>Explore Our Extensive Collections</h3>
            <hr />
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel2} alt="Second slide" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={Carousel3} alt="Third slide" />
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

import React from "react";
import { Button, Card } from "react-bootstrap";
import exampleImage from "../../assets/carouselImg/Carousel5.jpg";
import { Link } from "react-router-dom";
export const CustomCard = ({
  imgUrl = exampleImage,
  title = "Harry Potter",
  author = "Doumbledore",
  slug = "The Deathly Hallows",
  year = 2025,
}) => {
  return (
    <Card style={{ width: "18rem" }}>
      <div className="m-2 ">
        <Card.Img variant="top" src={imgUrl} className="rounded" />
      </div>

      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
        <Link to={slug}>
          <Button variant="dark">View Details...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

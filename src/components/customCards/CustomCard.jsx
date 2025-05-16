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
        <Card.Img
          variant="top"
          src={import.meta.env.VITE_ROOT_URL + imgUrl.slice(6)}
          className="rounded"
          style={{ height: "300px", objectFit: "cover", width: "100%" }}
        />
      </div>

      <Card.Body className="text-center">
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {author} - {year}
        </Card.Text>
        <Link to={"/book/" + slug}>
          <Button variant="dark">View Details...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

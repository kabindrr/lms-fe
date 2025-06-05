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
          style={{
            height: "300px",
            objectFit: "contain",
            width: "100%",
            cursor: "pointer",
          }}
        />
      </div>

      <Card.Body
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Card.Title>{title}</Card.Title>
        <Card.Text className="fw-bold">
          {author} - {year}
        </Card.Text>
        <Link to={"/book/" + slug} className="d-grid">
          <Button variant="dark">View Details...</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export const CustomListCard = ({
  imgUrl = exampleImage,
  title = "Harry Potter",
  author = "Doumbledore",
  slug = "The Deathly Hallows",
  year = 2025,
  description,
}) => {
  return (
    <Card style={{ width: "800px", margin: "0 auto" }}>
      <div className="d-flex m-2" style={{ height: "300px" }}>
        {/* Image Box with fixed size */}
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            backgroundColor: "#f8f9fa",
          }}
        >
          <img
            src={import.meta.env.VITE_ROOT_URL + imgUrl.slice(6)}
            alt={title}
            style={{
              maxWidth: "100%",
              maxHeight: "100%",
              objectFit: "contain",
              display: "block",
            }}
            className="rounded"
          />
        </div>

        {/* Body Section */}
        <Card.Body
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Card.Title>{title}</Card.Title>
            <Card.Text className="fw-bold">
              {author} - {year}
            </Card.Text>
            <Card.Text>{description.slice(0, 200)}...</Card.Text>
          </div>
          <div className="mt-auto">
            <Link to={`/book/${slug}`} className="d-grid">
              <Button variant="dark">View Details...</Button>
            </Link>
          </div>
        </Card.Body>
      </div>
    </Card>
  );
};

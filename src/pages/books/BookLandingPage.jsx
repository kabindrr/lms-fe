import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export const BookLandingPage = () => {
  const { slug } = useParams();
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const [book, setBook] = useState({});

  useEffect(() => {
    const selectedBook = publicBooks?.find((book) => book.slug === slug);
    setBook(selectedBook);
  }, [publicBooks]);

  return (
    <Container>
      <Row>
        <Col>
          <div>
            <img
              src={import.meta.env.VITE_ROOT_URL + book?.imgUrl?.slice(6)}
              alt=""
              className="img-fluid rounded shadow-sm mt-5"
              style={{ maxWidth: "300px", height: "auto" }}
            />
          </div>
        </Col>
        <Col>Book Info Section</Col>
      </Row>

      <Row>
        <Col>Bottom Section</Col>
      </Row>
    </Container>
  );
};

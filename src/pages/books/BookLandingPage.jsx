import React, { useEffect, useState } from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSinglePublicBookAction } from "../../features/book/bookAction";

export const BookLandingPage = () => {
  const { slug } = useParams();
  const { publicBooks } = useSelector((state) => state.bookInfo);
  const [book, setBook] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // First approach fetch locally
    // const selectedBook = publicBooks?.find((book) => book.slug === slug);
    // setBook(selectedBook);
    //Second Approach fetch live from server

    dispatch(fetchSinglePublicBookAction(slug));
  }, [publicBooks, dispatch, slug]);

  return (
    <Container>
      <Row className="mt-3">
        <Col>
          <Breadcrumb>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
              Home
            </Breadcrumb.Item>
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/all-books" }}>
              All Books
            </Breadcrumb.Item>
            <Breadcrumb.Item active>{book.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      <Row>
        <Col>
          <div>
            <img
              src={import.meta.env.VITE_ROOT_URL + book?.imgUrl?.slice(6)}
              alt=""
              className="img-fluid rounded shadow-sm mt-5"
              style={{ maxWidth: "500px", height: "auto" }}
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

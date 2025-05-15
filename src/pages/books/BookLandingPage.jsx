import React, { useEffect, useState } from "react";
import {
  Alert,
  Breadcrumb,
  Button,
  Col,
  Container,
  Row,
  Spinner,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { fetchSinglePublicBookAction } from "../../features/book/bookAction";
import { LiaStarSolid } from "react-icons/lia";

export const BookLandingPage = () => {
  const { slug } = useParams();
  const { selectedBook } = useSelector((state) => state.bookInfo);
  const [book, setBook] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // First approach fetch locally
    // const selectedBook = publicBooks?.find((book) => book.slug === slug);
    // setBook(selectedBook);
    //Second Approach fetch live from server

    //Second approach

    const fetchBookWithSpinner = async () => {
      setLoading(true);
      await dispatch(fetchSinglePublicBookAction(slug));
      setLoading(false);
    };
    fetchBookWithSpinner();
    // dispatch(fetchSinglePublicBookAction(slug));
  }, [dispatch, slug]);

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
            <Breadcrumb.Item active>{selectedBook.title}</Breadcrumb.Item>
          </Breadcrumb>
        </Col>
      </Row>
      {loading ? (
        <Row>
          <Col>
            <Spinner animation="border" role="status" variant="primary" />
            <div className="mt-2">Loading Book Details...</div>
          </Col>
        </Row>
      ) : (
        !selectedBook?._id && (
          <Row>
            <Col>
              <Alert variant="danger">
                This book is not available at the Moment, please contact Admin.
              </Alert>
            </Col>
          </Row>
        )
      )}
      {selectedBook?._id && (
        <>
          <Row>
            <Col>
              <div>
                <img
                  src={
                    import.meta.env.VITE_ROOT_URL +
                    selectedBook?.imgUrl?.slice(6)
                  }
                  alt=""
                  className="img-fluid rounded shadow-sm mt-5"
                  style={{ maxWidth: "500px", maxHeight: "400px" }}
                />
              </div>
            </Col>
            <Col>
              <div className="mt-5 d-flex flex-column justify-content-between h-70">
                <div className="top fw-bolder">
                  <h1>{selectedBook.title}</h1>
                </div>
                <div>
                  <h4>
                    {selectedBook.author} - {selectedBook.year}
                  </h4>
                </div>
                <div className="my-3">
                  <span>{selectedBook.genre}</span> |
                  <span>
                    {" "}
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                    <LiaStarSolid />
                  </span>
                  {"  "}|<span> {"  "}334 Reviews</span>
                </div>
                <div>
                  {selectedBook.description.slice(0, 300)}...... Read more
                </div>
                <div className="bottom">
                  {" "}
                  <hr />
                  <div className="d-grid">
                    {" "}
                    <Button variant="dark">Add to Borrowing List</Button>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </>
      )}

      <Row>
        <Col>Bottom Section</Col>
      </Row>
    </Container>
  );
};

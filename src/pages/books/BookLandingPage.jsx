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
import {
  LiaStar,
  LiaStarHalf,
  LiaStarHalfAltSolid,
  LiaStarSolid,
} from "react-icons/lia";
import { Star } from "../../components/star/Star";

export const BookLandingPage = () => {
  const { slug } = useParams();
  const { selectedBook } = useSelector((state) => state.bookInfo);
  const [book, setBook] = useState({});
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [showUrl, setShowUrl] = useState(0);

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
          <Row className="mt-5 ">
            <Col md={6}>
              <div style={{ height: "400px", overflow: "hidden" }}>
                <img
                  src={
                    import.meta.env.VITE_ROOT_URL +
                    selectedBook?.imageList[showUrl].slice(6)
                  }
                  alt={selectedBook.title}
                  className="w-100 h-100"
                  style={{ objectFit: "contain", borderRadius: "0.5rem" }}
                />
              </div>
              {/* scrollable thumbnails */}
              <div className="d-flex justify-content-center">
                <div className="d-flex overflow-auto gap-2 m-4 py-3 ">
                  {selectedBook.imageList?.map((url, i) => (
                    <img
                      src={import.meta.env.VITE_ROOT_URL + url.slice(6)}
                      key={url}
                      width={"100px"}
                      className="img-thumbnail"
                      onClick={() => setShowUrl(i)}
                      style={{ cursor: "pointer" }}
                    />
                  ))}
                </div>
              </div>
            </Col>

            {/* Content Column */}
            <Col md={6}>
              <div
                style={{
                  height: "400px",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <h1>{selectedBook.title}</h1>
                  <h4>
                    {selectedBook.author} - {selectedBook.year}
                  </h4>
                  <div className="my-3">
                    <span>{selectedBook.genre}</span> |{" "}
                    <Star averageRating={2}  totalReviews={55} />{" "}
                  </div>
                  <div>
                    {selectedBook.description.slice(0, 300)}... Read more
                  </div>
                </div>

                {/* Button at the bottom */}
                <div>
                  <hr />
                  <div className="d-grid">
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

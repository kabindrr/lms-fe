import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

import { BookListing } from "../../components/bookListing/BookListing";

const AllBooks = () => {
  const { publicBooks } = useSelector((state) => state.bookInfo);

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
          </Breadcrumb>
        </Col>
      </Row>
      <BookListing bookList={publicBooks} />
    </Container>
  );
};

export default AllBooks;

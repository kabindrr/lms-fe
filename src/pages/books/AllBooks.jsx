import React from "react";
import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomCard } from "../../components/customCards/CustomCard";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";
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
      <Row>
        <Col>
          <div className="d-flex justify-content-between">
            <div>100 Books Found</div>
            <div>
              {" "}
              <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Card</Button>
                <Button variant="dark">List</Button>
              </ButtonGroup>
            </div>
          </div>
          <div></div>
          <div className="bookList-Container d-flex gap-3 flex-wrap justify-content-center m-3">
            {publicBooks.length > 0 &&
              publicBooks.map((book) => (
                <CustomCard key={book._id} {...book} />
              ))}
          </div>
          <div className="pagination">todo pagination</div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllBooks;

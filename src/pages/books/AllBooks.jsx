import React from "react";
import { Breadcrumb, Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import { CustomCard } from "../../components/customCards/CustomCard";
import { Pagination } from "react-bootstrap";
const AllBooks = () => {
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
          <div>100 Books Found</div>
          <div className="bookList-Container d-flex gap-3 flex-wrap justify-content-center m-3">
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
            <CustomCard />
          </div>
          <div className="pagination">todo pagination</div>
        </Col>
      </Row>
    </Container>
  );
};

export default AllBooks;

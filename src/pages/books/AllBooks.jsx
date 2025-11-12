import React, { useState } from "react";
import {
  Breadcrumb,
  Button,
  ButtonGroup,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  CustomCard,
  CustomListCard,
} from "../../components/customCards/CustomCard";
import { Pagination } from "react-bootstrap";
import { useSelector } from "react-redux";

import { CustomPagination } from "../../components/customPagination/CustomPagination";

const booksPerScreen = 6;
const AllBooks = () => {
  const [view, setView] = useState("card");
  const [active, setActive] = useState(1);
  const { publicBooks } = useSelector((state) => state.bookInfo);

  const pages = Math.ceil(publicBooks.length / booksPerScreen);

  // GEt book for the current page
  const startIndex = (active - 1) * booksPerScreen;
  const endIndex = startIndex + booksPerScreen;
  const displayBooks = publicBooks.slice(startIndex, endIndex);

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
                <Button onClick={() => setView("card")} variant="secondary">
                  Card
                </Button>
                <Button onClick={() => setView("list")} variant="dark">
                  List
                </Button>
              </ButtonGroup>
            </div>
          </div>
          <div></div>
          <hr />
          <div className="bookList-Container d-flex gap-3 flex-wrap justify-content-center m-3">
            {displayBooks.length > 0 &&
              displayBooks.map((book) =>
                view === "card" ? (
                  <CustomCard key={book._id} {...book} />
                ) : (
                  <CustomListCard key={book._id} {...book} />
                )
              )}
          </div>
          <CustomPagination
            active={active}
            setActive={setActive}
            pages={pages}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AllBooks;

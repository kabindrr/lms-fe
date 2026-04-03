import React, { useState } from "react";
import { Button, ButtonGroup, Col, Row } from "react-bootstrap";
import {
  CustomCard,
  CustomListCard,
} from "../../components/customCards/CustomCard";
import { CustomPagination } from "../../components/customPagination/CustomPagination";

const booksPerScreen = 6;

export const BookListing = ({ bookList }) => {
  const [view, setView] = useState("card");
  const [active, setActive] = useState(1);

  const pages = Math.ceil(bookList.length / booksPerScreen);

  // GEt book for the current page
  const startIndex = (active - 1) * booksPerScreen;
  const endIndex = startIndex + booksPerScreen;
  const displayBooks = bookList.slice(startIndex, endIndex);

  return (
    <Row>
      <Col>
        <div className="d-flex justify-content-between">
          <div>{bookList.length} Books Found</div>
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
        <CustomPagination active={active} setActive={setActive} pages={pages} />
      </Col>
    </Row>
  );
};

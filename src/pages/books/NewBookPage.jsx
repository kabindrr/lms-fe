import React from "react";
import NewBookForm from "../../components/forms/newBookForms/NewBookForm";
import { Link, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

export const NewBookPage = () => {
  return (
    <div>
      NewBookPage
      <hr />
      <Link to="/user/books">
        <Button className="m-3" variant="danger">
          Go back
        </Button>
      </Link>
      <NewBookForm />
      <hr />
    </div>
  );
};

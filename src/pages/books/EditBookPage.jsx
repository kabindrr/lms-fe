import React from "react";
import EditBookForm from "../../components/forms/newBookForms/EditBookForm";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export const EditBookPage = () => {
  return (
    <div className="p-3">
      <h3 className="d-flex  justify-content-center">Edit Book</h3>
      <hr />
      <Link to="/user/books">
        <Button className="m-3" variant="danger">
          Go back
        </Button>
      </Link>
      <div>
        <EditBookForm />
      </div>
    </div>
  );
};

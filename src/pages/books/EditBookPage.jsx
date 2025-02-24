import React from "react";
import EditBookForm from "../../components/forms/newBookForms/EditBookForm";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";
import { deleteBookApi } from "../../features/book/bookAPI";

export const EditBookPage = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const handleOnDelete = async () => {
    if (
      confirm(
        "Are you sure you want to delete this Book? This can't be undone if you click Yes"
      )
    ) {
      const result = await deleteBookApi(_id);
      result.status === "success" && navigate("/user/books");
    }
  };
  return (
    <div className="p-3">
      <h3 className="d-flex  justify-content-center">Edit Book</h3>
      <hr />
      <Link to="/user/books">
        <Button className="m-3" variant="info">
          Go back
        </Button>
      </Link>
      <div>
        <EditBookForm />
      </div>
      <div className="d-grid p-4">
        <Button variant="danger" onClick={handleOnDelete}>
          Delete book
        </Button>
      </div>
    </div>
  );
};

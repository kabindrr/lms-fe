import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { BookTable } from "../../components/tables/BookTable";
import { adminFetchAllBookAction } from "../../features/book/bookAction";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const Books = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(adminFetchAllBookAction());
  }, [dispatch]);
  return (
    <div className="p-3">
      <h3>Books</h3>
      <hr />
      <div className="text-end">
        <Link to="/user/new-book">
          {" "}
          <Button>Add New Book</Button>
        </Link>
      </div>

      <div className="mt-4">
        <BookTable />
      </div>
    </div>
  );
};

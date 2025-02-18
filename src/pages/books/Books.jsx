import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { BookTable } from "../../components/tables/BookTable";
import { adminFetchAllBookAction } from "../../features/book/bookAction";

export const Books = () => {
  useEffect(() => {
    adminFetchAllBookAction();
  }, []);
  return (
    <div className="p-3">
      <h3>Books</h3>
      <hr />
      <div className="text-end">
        <Button>Add New Book</Button>
      </div>

      <div className="mt-4">
        <div className="d-flex justify-content-between mb-4 ">
          <div>10 Book (s) found!</div>
          <div>
            <Form.Control placeholder="Search Book By Name" />
          </div>
        </div>
      </div>
      <BookTable />
    </div>
  );
};

import { useEffect, useState } from "react";
import { Button, Form, Table } from "react-bootstrap";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const BookTable = () => {
  const { books } = useSelector((state) => state.bookInfo);

  const [displayBook, setDisplayBook] = useState([]);

  useEffect(() => {
    setDisplayBook(books);
  }, [books]);

  const handleOnSearch = (e) => {
    const { value } = e.target;
    console.log(value);
    const tempArg = books.filter((book) =>
      book.title.toLowerCase().includes(value.toLowerCase())
    );
    setDisplayBook(tempArg);
  };
  return (
    <div>
      <div className="d-flex justify-content-between mb-4 ">
        <div>{displayBook.length} Book (s) found!</div>
        <div>
          <Form.Control
            placeholder="Search Book By Name"
            onChange={handleOnSearch}
          />
        </div>
      </div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Status</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Is Available</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {displayBook.map(
            (
              { _id, status, title, available, imgUrl, expectedAvailable },
              i
            ) => (
              <tr key={_id}>
                <td>{i + 1}</td>
                <td
                  className={
                    status === "active" ? "text-success" : "text-danger"
                  }
                >
                  {status}
                </td>
                <td>
                  <img
                    // src={import.meta.env.VITE_ROOT_URL + imgUrl.slice(6)}
                    src={imgUrl}
                    alt=""
                    width="60px"
                  />
                </td>
                <td>{title}</td>
                <td>
                  {available
                    ? "Yes"
                    : !available && expectedAvailable
                    ? "From " + expectedAvailable.slice(0, 10)
                    : "Not sure"}
                </td>
                <td>
                  <Link to={"/user/edit-book/" + _id}>
                    <Button variant="warning">Edit</Button>
                  </Link>
                </td>
              </tr>
            )
          )}
        </tbody>
      </Table>
    </div>
  );
};

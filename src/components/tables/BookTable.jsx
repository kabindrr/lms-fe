import React, { useEffect } from "react";
import { Button, Table } from "react-bootstrap";
import Book1 from "../../assets/BookThumbnail.jpg";

export const BookTable = () => {


  return (
    <div>
      {" "}
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Thumbnail</th>
            <th>Name</th>
            <th>Is Available</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>
              <img
                src="https://m.media-amazon.com/images/I/81pGvEVZXAL._SY342_.jpg"
                alt=""
                width="60px"
              />
            </td>
            <td>The Power of AI</td>
            <td>YES, NO:available Date</td>
            <td>
              <Button variant="warning">Edit</Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

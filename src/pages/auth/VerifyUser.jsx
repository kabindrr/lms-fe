import React, { useState } from "react";
import { Spinner } from "react-bootstrap";

export const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  return (
    <div className="m-auto mt-3" style={{ width: "450px" }}>
      {isPending && (
        <div>
          <div className="d-flex justify-content-center">
            <Spinner animation="border" variant="primary" />
          </div>

          <div>Please do not go back or refresh the Browser. Plsease Wait</div>
        </div>
      )}
    </div>
  );
};

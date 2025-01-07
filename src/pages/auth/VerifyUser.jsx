import React, { useEffect, useState } from "react";
import { Alert, Spinner } from "react-bootstrap";
import { useNavigate, useSearchParams } from "react-router-dom";
import { activateNewUserApi } from "../../services/authApi";
import { useRef } from "react";

export const VerifyUser = () => {
  const [isPending, setIsPending] = useState(true);
  const [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});

  const shouldFetchRef = useRef(true);
  const navigate = useNavigate();

  const sessionId = searchParams.get("sessionId");
  const t = searchParams.get("t");
  console.log(sessionId, t);

  useEffect(() => {
    const activateUser = async () => {
      if (!sessionId || !t || !shouldFetchRef.current) return;
      try {
        const result = await activateNewUserApi({ sessionId, t });
        setResponse(result);
      } catch (error) {
        setResponse({
          status: "error",
          message: "Failed to activate user. Please try again",
        });
      } finally {
        setIsPending(false);
        shouldFetchRef.current = false;
      }
    };
    activateUser();

    if (response.status === "success") {
      setTimeout(() => {
        navigate("/signin");
      }, 3000);
    }
  }, [sessionId, t, response.status, navigate]);
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

      {response?.message && (
        <Alert variant={response.status === "success" ? "success" : "danger"}>
          {" "}
          {response.message}
        </Alert>
      )}
    </div>
  );
};

import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";

export const ForgetPasswordPage = () => {
  const handleOnSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="SignInPage d-flex justify-content-center align-items-center">
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Forgot Password? Lets get this fixed now...🫡🫡</Card.Title>
          <hr />
          <Form onSubmit={handleOnSubmit}>
            <CustomInput
              label="Email"
              name="email"
              type="email"
              required
              placeholder="name@gmail.com"
            />

            <div className="d-grid">
              <Button type="submit">Sign In</Button>
            </div>
          </Form>
          <div className="text-end my-3 ">
            Ready to Login?<a href="/signin"> Login Now!</a>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { signUpInputes } from "../../assets/customInputes/userSignUpInputes";

export const SignUpPage = () => {
  return (
    <div className="d-flex justify-content-center">
      <Form style={{ width: "450px" }} className="card p-3 mt-5 shadow-lg mb-5">
        <h3>Join our expanding community today</h3>
        {signUpInputes.map((inpute) => (
          <CustomInput key={inpute.name} {...inpute} />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

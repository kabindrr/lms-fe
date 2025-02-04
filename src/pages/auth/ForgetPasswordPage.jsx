import React, { useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import useForm from "../../hooks/useForm";
const initialState = {};
export const ForgetPasswordPage = () => {
  const [showPassResetForm, setShowPassResetForm] = useState(false);

  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form.email);
  };

  const handleOnPasswordResetSubmit = (e) => {
    e.preventDefault();
    console.log(form.otp, form.password);
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
              onChange={handleOnChange}
            />

            <div className="d-grid">
              <Button type="submit">Request OTP Now</Button>
            </div>
          </Form>

          {showPassResetForm && (
            <>
              <hr />

              {/* show this form once otp is requested */}
              <div>
                <Alert variant="success">
                  We will send you an OTP to your email, if email if found in
                  our system. Please check your junk/spam folder if you don't
                  see email in your Inbox
                </Alert>
                <Form onSubmit={handleOnPasswordResetSubmit}>
                  <CustomInput
                    label="OTP"
                    name="otp"
                    type="number"
                    required
                    placeholder="1234"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="New Password"
                    name="password"
                    type="password"
                    required
                    placeholder="**********"
                    onChange={handleOnChange}
                  />
                  <CustomInput
                    label="Confirm Password"
                    name="confirmPassword"
                    type="password"
                    required
                    placeholder="**********"
                    onChange={handleOnChange}
                  />
                  <div className="py-3">
                    <ul className="text-danger">
                      {passwordErrors.length > 0 &&
                        passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
                    </ul>
                  </div>

                  <div className="d-grid">
                    <Button type="submit" disabled={passwordErrors.length}>
                      Request Password Now
                    </Button>
                  </div>
                </Form>
              </div>
            </>
          )}

          <div className="text-end my-3 ">
            Ready to Login?<a href="/signin"> Login Now!</a>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

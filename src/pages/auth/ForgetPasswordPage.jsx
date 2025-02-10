import React, { useEffect, useState } from "react";
import { Alert, Button, Card, Form, Spinner } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import useForm from "../../hooks/useForm";
import {
  requestPasswordResetOTPApi,
  resetPasswordApi,
} from "../../services/authApi";
import { useNavigate } from "react-router-dom";

export const ForgetPasswordPage = () => {
  const [showPassResetForm, setShowPassResetForm] = useState(false);
  const [isOTPPending, setIsOTPPending] = useState(false);
  const timeToRequestNewOTP = 30;
  const navigate = useNavigate();

  // Get stored counter & request flag from localStorage
  const storedCounter = Number(localStorage.getItem("otpCounter")) || 0;
  const [counter, setCounter] = useState(storedCounter);
  const [hasRequestedOTP, setHasRequestedOTP] = useState(
    localStorage.getItem("hasRequestedOTP") === "true"
  );
  const [isOTPBtnDisabled, setIsOTPBtnDisabled] = useState(storedCounter > 0);

  const { form, handleOnChange, passwordErrors } = useForm(0);

  useEffect(() => {
    if (hasRequestedOTP && counter > 0) {
      setIsOTPBtnDisabled(true);
      const timer = setInterval(() => {
        setCounter((prev) => {
          const newCounter = prev - 1;
          localStorage.setItem("otpCounter", newCounter); // Store updated counter
          return newCounter;
        });
      }, 1000);

      return () => clearInterval(timer);
    } else {
      setIsOTPBtnDisabled(false);
      localStorage.removeItem("otpCounter"); // Reset stored counter when it reaches 0
    }
  }, [counter, hasRequestedOTP]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    setIsOTPPending(true);
    setIsOTPBtnDisabled(true);

    const email = form.email;
    const response = await requestPasswordResetOTPApi({ email });

    if (response?.status === "success") {
      setShowPassResetForm(true);
      setHasRequestedOTP(true);
      setCounter(timeToRequestNewOTP);
      localStorage.setItem("hasRequestedOTP", "true");
      localStorage.setItem("otpCounter", timeToRequestNewOTP); // Store new countdown
    }

    setIsOTPPending(false);
  };

  const handleOnPasswordResetSubmit = async (e) => {
    e.preventDefault();
    const { email, otp, password } = form;
    const payload = { email, otp, password };
    const response = await resetPasswordApi(payload);
    console.log(response);
    if (response?.status === "success") {
      //redirect user to login page

      setTimeout(() => navigate("/signin"), 2000);
    }
  };

  return (
    <div className="SignInPage d-flex justify-content-center align-items-center">
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>
            Forgot Password? Let's get this fixed now...🫡🫡
          </Card.Title>
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
              <Button type="submit" disabled={isOTPBtnDisabled}>
                {isOTPPending ? (
                  <Spinner variant="border" />
                ) : hasRequestedOTP && counter > 0 ? (
                  `Request OTP in ${counter}s`
                ) : (
                  "Request OTP"
                )}
              </Button>
            </div>
          </Form>

          {showPassResetForm && (
            <>
              <hr />
              <Alert variant="success">
                We will send you an OTP to your email if it's found in our
                system. Please check your junk/spam folder if you don't see it
                in your inbox.
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
            </>
          )}

          <div className="text-end my-3">
            Ready to Login? <a href="/signin">Login Now!</a>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

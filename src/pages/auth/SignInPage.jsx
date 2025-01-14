import React, { useEffect } from "react";
import Button from "react-bootstrap/Button";
import { Card, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import useForm from "../../hooks/useForm";
import { signInUserApi } from "../../services/authApi";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserAction } from "../../features/user/userAction";
import { useNavigate } from "react-router-dom";

const initialState = {};

export const SignInPage = () => {
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userInfo);
  useEffect(() => {
    user?._id && navigate("/user");
  }, [user?._id, navigate]);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (form.email && form.password) {
      const { payload } = await signInUserApi(form);

      if (payload?.accessJWT) {
        sessionStorage.setItem("accessJWT", payload.accessJWT);
        localStorage.setItem("refreshJWT", payload.refreshJWT);
        console.log(10000, payload);

        dispatch(fetchUserAction());
      }

      //get user and redirect to userprofile
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div className="SignInPage d-flex justify-content-center align-items-center">
      {" "}
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Welcome to Our Library</Card.Title>
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
            <CustomInput
              label="Password"
              name="password"
              type="password"
              required
              placeholder="********"
              onChange={handleOnChange}
            />
            <div className="d-grid">
              <Button type="submit">Sign In</Button>
            </div>
          </Form>
          <div className="text-end my-3 ">
            Forgot Password?
            <a href="/forgot-password">Reset Now!</a>{" "}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

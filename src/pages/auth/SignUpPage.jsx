import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { signUpInputes } from "../../assets/customInputes/userSignUpInputes";
import useForm from "../../hooks/useForm";
import { signUpNewUserApi } from "../../services/authApi";

const initialState = {};
export const SignUpPage = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }

    const result = await signUpNewUserApi(form);
    console.log(result);
  };

  return (
    <div className="d-flex justify-content-center">
      <Form
        style={{ width: "450px" }}
        className="card p-3 mt-5 shadow-lg mb-5"
        onSubmit={handleOnSubmit}
      >
        <h3>Join our expanding community today</h3>
        {signUpInputes.map((inpute) => (
          <CustomInput
            key={inpute.name}
            {...inpute}
            onChange={handleOnChange}
          />
        ))}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/customInpute/CustomInput";
import { signUpInputes } from "../../assets/customInputes/userSignUpInputes";
import useForm from "../../hooks/useForm";
import { signUpNewUserApi } from "../../services/authApi";
import { toast } from "react-toastify";

const initialState = {
  fName: "",
  lName: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const SignUpPage = () => {
  const { form, setForm, handleOnChange, passwordErrors } =
    useForm(initialState);

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const { confirmPassword, ...rest } = form;
    if (confirmPassword !== rest.password) {
      return alert("Password do not match");
    }

    const result = await signUpNewUserApi(rest);

    if (result?.status === "success") {
      setForm(initialState);
      toast.success("Form submitted successfully");
    }
  };

  return (
    <div className="d-flex justify-content-center signUpPage">
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
            value={form[inpute.name] || ""}
            onChange={handleOnChange}
          />
        ))}
        <div className="py-3">
          <ul className="text-danger">
            {passwordErrors.length > 0 &&
              passwordErrors.map((msg) => <li key={msg}>{msg}</li>)}
          </ul>
        </div>

        <Button
          variant="primary"
          type="submit"
          disabled={passwordErrors.length}
        >
          Submit
        </Button>
      </Form>
    </div>
  );
};

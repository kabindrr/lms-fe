import { useEffect, useState } from "react";
import { validator } from "../utils/validatePassword";

const handleOnChange = ({ e, form, setForm }) => {
  let { checked, name, value } = e.target;

  if (name === "status") {
    console.log(name, value, checked);

    value = checked ? "active" : "inactive";
  }

  setForm({ ...form, [name]: value });
};

const useForm = (initialState) => {
  const [form, setForm] = useState(initialState);
  const [passwordErrors, setPasswordErrors] = useState([]);

  //only when password and confrompassword changes
  useEffect(() => {
    const errorArg = validator(form.password, form.confirmPassword);
    setPasswordErrors(errorArg);
  }, [form.password, form.confirmPassword]);

  return {
    form,
    setForm,
    passwordErrors,
    handleOnChange: (e) =>
      handleOnChange({
        e,
        form,

        setForm,
      }),
  };
};
export default useForm;

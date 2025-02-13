import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../customInpute/CustomInput";
import { NewBookInputes } from "../../../assets/customInputes/BookInputes";
import useForm from "../../../hooks/useForm";

const initialState = {};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);

  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <div className="p-4">
      <h3>Insert New Book Details</h3>
      <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        {NewBookInputes.map((inpute) => (
          <CustomInput
            key={inpute.name}
            {...inpute}
            onChange={handleOnChange}
          />
        ))}
        <div className="d-grid">
          <Button variant="danger" type="submit">
            Add New Book
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default NewBookForm;

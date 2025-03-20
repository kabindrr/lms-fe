import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../customInpute/CustomInput";
import { NewBookInputes } from "../../../assets/customInputes/BookInputes";
import useForm from "../../../hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction";

const initialState = {};
const NewBookForm = () => {
  const { form, setForm, handleOnChange } = useForm(initialState);
  const [image, setImage] = useState();

  const handeOnImageSelect = (e) => {
    setImage(e.target.files[0]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (const key in form) {
      console.log(key, form[key]);
      formData.append(key, form[key]);
    }
    formData.append("image", image);
    const response = await postNewBookAction(formData);
    console.log(response);
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
        <Form.Group className="mb-3">
          <Form.Control
            type="file"
            name="image"
            onChange={handeOnImageSelect}
            required
          />
        </Form.Group>

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

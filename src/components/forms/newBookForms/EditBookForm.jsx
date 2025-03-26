import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../customInpute/CustomInput";
import { EditBookInputes } from "../../../assets/customInputes/BookInputes";
import useForm from "../../../hooks/useForm";
import { postNewBookAction } from "../../../features/book/bookAction";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { updateBookApi } from "../../../features/book/bookAPI";

const initialState = {};
const EditBookForm = () => {
  const { _id } = useParams();
  const navigate = useNavigate();

  const { form, setForm, handleOnChange } = useForm(initialState);
  const [images, setImages] = useState([]);

  const [imageToDelete, setImageToDelete] = useState([]);

  const { books } = useSelector((state) => state.bookInfo);

  useEffect(() => {
    if (_id !== form._id) {
      const selectedBook = books.find((book) => book._id === _id);

      selectedBook?._id ? setForm(selectedBook) : navigate("/user/books");

      setForm(selectedBook);
    }
  }, [setForm]);

  const handeOnImageSelect = (e) => {
    console.log(e.target.files);
    const files = [...e.target.files];
    if (files.length > 2) {
      e.target.value = "";
      return alert("Max 2 images per Book are allowed");
    }
    setImages([...e.target.files]);
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    if (imageToDelete.includes(form.imgUrl)) {
      return alert("You cannot Delete the selected Thumbnail");
    }

    const {
      addedBy,
      createdAt,
      lastUpdatedBy,
      slug,
      updatedAt,
      __v,
      isbn,
      available,
      ...rest
    } = form;

    const formData = new FormData();

    for (const key in rest) {
      formData.append(key, rest[key]);
    }
    images.map((img) => formData.append("images", img));
    imageToDelete.map((img) => formData.append("imageToDelete", img));

    const response = await updateBookApi(formData);
    console.log(response);
  };

  const handleOnImageToDelete = (e) => {
    const { checked, value } = e.target;

    checked
      ? setImageToDelete([...imageToDelete, value])
      : setImageToDelete(imageToDelete.filter((img) => img !== value));
  };

  return (
    <div className="p-4">
      <h3 className="text-center">Edit Book Details</h3>
      <hr />
      <Form className="m-2" onSubmit={handleOnSubmit}>
        <Form.Group className="mb-3">
          <Form.Check // prettier-ignore
            name="status"
            type="switch"
            id="custom-switch"
            label={(form.status || "inactive").toUpperCase()}
            onChange={handleOnChange}
            checked={form.status === "active"}
          />
        </Form.Group>
        {EditBookInputes.map((inpute) => (
          <CustomInput
            key={inpute.name}
            {...inpute}
            onChange={handleOnChange}
            value={form[inpute.name]}
          />
        ))}

        <div className="m-3 d-flex">
          {(form.imageList || []).map((img) => (
            <div key={img} className="m-1">
              <Form.Check
                type="radio"
                name="imgUrl"
                value={img}
                checked={form.imgUrl === img}
                onChange={handleOnChange}
                label={"Thumbnail"}
              />

              <Form.Check
                type="checkbox"
                label="Delete"
                value={img}
                onChange={handleOnImageToDelete}
              />

              <img
                src={import.meta.env.VITE_ROOT_URL + img?.slice(6)}
                alt="Book Image"
                width="200px"
                className="img-thumbnail"
              />
            </div>
          ))}
        </div>
        <Form.Group className="mb-3">
          <Form.Label>Upload More Images (Max 2 Images per Book)</Form.Label>
          <Form.Control
            type="file"
            name="image"
            onChange={handeOnImageSelect}
            multiple
            accept="image/*"
          />
        </Form.Group>

        <div className="mb-2">
          <hr />
          <h4 className="text-center">Additional Info</h4>
          <div>
            Added By: {form?.addedBy?.name || "unknown"} <br />
            Date:{form.createdAt}
          </div>
          <div>
            Last Updated By: {form?.lastUpdatedBy?.name || "Unknown"} <br />
            Date:{form.updatedAt}
          </div>
        </div>
        <div className="d-grid">
          <Button type="submit" variant="warning">
            Update Book
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default EditBookForm;

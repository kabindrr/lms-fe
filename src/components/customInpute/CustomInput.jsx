import React from "react";
import { Form } from "react-bootstrap";

export const CustomInput = ({ label, ...rest }) => {
  return (
    <>
      <Form.Group className="mb-3">
        <Form.Label>{label}</Form.Label>
        <Form.Control {...rest} />
      </Form.Group>
    </>
  );
};

// export const CustomInput = ({ label, value, ...rest }) => {
//   let valueData = value;
//   if (rest.type === "date") {
//     valueData = value ? value.slice(0, 10) : null;
//   }
//   console.log(valueData);
//   return (
//     <>
//       <Form.Group className="mb-3">
//         <Form.Label>{label}</Form.Label>
//         <Form.Control {...rest} />
//       </Form.Group>
//     </>
//   );
// };

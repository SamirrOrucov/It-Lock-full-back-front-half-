import React, { useEffect, useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./AddPage.scss";
function AddPage() {
  const [dbData, setDbData] = useState([]);
  async function postBrand(value) {
    const response = await fetch("http://localhost:3003/", {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await getFetch();
    
  }
  async function getFetch() {
    const result = await fetch("http://localhost:3003/");
    const data = await result.json();
    setDbData(data);
  }
  useEffect(() => {
    getFetch();
  }, []);
  async function deleteProduct(id) {
    await fetch("http://localhost:3003/" + id, {
      method: "DELETE",
    })
    // await getFetch()
    .then(()=>setDbData((prevVal)=>prevVal.filter((x)=>x._id!==id)))
  }
  return (
    <>
      <Formik
        initialValues={{ image: "", title: "", company: "" }}
        validationSchema={Yup.object({
          image: Yup.string()
            .max(505, "Must be 105 characters or less")
            .required("Required"),
          title: Yup.string()
            .max(50, "Must be 50 characters or less")
            .required("Required"),
          company: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting,resetForm }) => {
          setTimeout(() => {
            postBrand(values);
            resetForm()
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form className="formik">
          <label htmlFor="image">Image Url </label>
          <Field name="image" type="text" />
          <ErrorMessage name="image" />

          <label htmlFor="title">Title</label>
          <Field name="title" type="text" />
          <ErrorMessage name="title" />

          <label htmlFor="company">Company</label>
          <Field name="company" type="company" />
          <ErrorMessage name="company" />

          <button type="submit">Submit</button>
        </Form>
      </Formik>
      <table id="customers">
        <thead>
          <tr>
            <th>Image Url</th>
            <th>Title</th>
            <th>Company</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>
          {dbData.map((x) => (
            <tr  key={x._id}>
              <td>
                <img src={x.image} alt="" />
              </td>
              <td>{x.title}</td>
              <td>{x.company}</td>
              <td>
                <i
                  onClick={() => deleteProduct(x._id)}
                  className="fa-regular fa-trash-can"
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AddPage;

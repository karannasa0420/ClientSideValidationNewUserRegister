import React from "react";
import "./NewUserRegister.css";
// import { useFormik } from "formik";
import { newRegisterSchema } from "./schemas";
import { Formik, Field, Form, ErrorMessage } from "formik";

const initialValues = {
  // left column
  employee_id: "",
  designation: "",
  contact_no: "",
  dob: "",
  city: "",
  user_role: "",
  // right column
  name: "",
  email: "",
  gender: "",
  address: "",
  state: "",
  checkbox: false,
};

const NewUserRegister = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={newRegisterSchema}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      <div className="container">
        <div className="wrapper">
          <div className="title">
            <span>Sign Up</span>
          </div>
          <Form className="wrapper2">
            <div className="user-details">
              <div className="input-box">
                <Field
                  name="employee_id"
                  type="text"
                  autocomplete="off"
                  placeholder="Personal ID"
                />
                <p>
                  <ErrorMessage name="employee_id" />
                </p>
              </div>
              <div className="input-box">
                <Field
                  name="designation"
                  type="text"
                  autocomplete="off"
                  placeholder="Designation"
                />
                <p>
                  <ErrorMessage name="designation" />
                </p>
              </div>
              <div className="input-box">
                <Field
                  name="contact_no"
                  type="text"
                  autocomplete="off"
                  placeholder="Contact"
                />
                <p>
                  <ErrorMessage name="contact_no" />
                </p>
              </div>
              <div className="input-box dob-outer">
                <div className="dob">
                  <label htmlFor="dob">Date of Birth</label>
                  <Field name="dob" type="date" />
                </div>
                <p>
                  <ErrorMessage name="dob" />
                </p>
              </div>
              <div className="input-box">
                <Field
                  name="city"
                  type="text"
                  autocomplete="off"
                  placeholder="City"
                />
                <p>
                  <ErrorMessage name="city" />
                </p>
              </div>

              <div className="input-box">
                <Field class="input-opt" name="user_role" as="select">
                  <option value="" selected>
                    Select User Role
                  </option>
                  <option value="admin">Admin</option>
                  <option value="student">Student</option>
                  <option value="faculty">Faculty</option>
                </Field>
                <p>
                  <ErrorMessage name="user_role" />
                </p>
              </div>

              <div className="input-box">
                <Field
                  name="name"
                  type="text"
                  autocomplete="off"
                  placeholder="Name"
                />
                <p>
                  <ErrorMessage name="name" />
                </p>
              </div>

              <div className="input-box">
                <Field
                  name="email"
                  type="email"
                  autocomplete="off"
                  placeholder="Email"
                />
                <p>
                  <ErrorMessage name="email" />
                </p>
              </div>

              <div className="input-box">
                <Field
                  name="address"
                  type="text"
                  autocomplete="off"
                  placeholder="Address"
                />
                <p>
                  <ErrorMessage name="address" />
                </p>
              </div>

              <div className="input-box">
                <Field
                  name="state"
                  type="text"
                  autocomplete="off"
                  placeholder="State"
                />
                <p>
                  <ErrorMessage name="state" />
                </p>
              </div>

              <div className="input-box gender-details">
                <div className="category" role="group">
                  <label htmlFor="gender">
                    <Field name="gender" type="radio" value="male" />
                    Male
                  </label>
                  <label htmlFor="gender">
                    <Field name="gender" type="radio" value="female" />
                    Female
                  </label>
                </div>
                <p>
                  <ErrorMessage name="gender" />
                </p>
              </div>
              <div className="checkbox-outer">
                <div className="checkbox">
                  <Field name="checkbox" type="checkbox" />
                  <label htmlFor="checkbox">I agree terms & conditions.</label>
                </div>
                <p>
                  <ErrorMessage name="checkbox" />
                </p>
              </div>
            </div>
            <div className="button">
              <input className="submit" type="submit" />
            </div>
          </Form>
        </div>
      </div>
    </Formik>
  );
};

export default NewUserRegister;

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { register } from "../slices/auth";
import { clearMessage } from "../slices/message";

const Register = () => {
  const [successful, setSuccessful] = useState(false);

  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .test(
        "len",
        "The username must be between 3 and 20 characters.",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 20
      )
      .required("This field is required!"),
    email: Yup.string()
      .email("This is not a valid email.")
      .required("This field is required!"),
    password: Yup.string()
      .test(
        "len",
        "The password must be between 6 and 40 characters.",
        (val) =>
          val &&
          val.toString().length >= 6 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;

    setSuccessful(false);

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        setSuccessful(true);
      })
      .catch(() => {
        setSuccessful(false);
      });
  };

  return (
    <div>
       <div className="signup-form">
      <div className="form-block">
      <h2 class="title__StyledTitle-sc-46lshq-0 knZdtG k-Title k-u-margin-bottom-quadruple k-u-align-center k-Title--quinary k-Title--noMargin" data-test-id="funnel-login-title">Bienvenue, commençons la création de votre compte.</h2>
        <div className="styles__StyledCardContainer-sc-9gozwx-0 bnQIst">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            {!successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  
                  <div className="hfnyXF k-u-margin-top-single k-TextInput__wrapper--medium">
                      <Field name="username" type="text" className="k-TextInput" />
                  </div>
                  <ErrorMessage
                    name="username"
                    component="div"
                    className="error-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  
                  <div className="hfnyXF k-u-margin-top-single k-TextInput__wrapper--medium">
                      <Field name="email" type="email" className="k-TextInput" />
                  </div>
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="error-field"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <div className="hfnyXF k-u-margin-top-single k-TextInput__wrapper--medium">
                      <Field name="password" type="password" className="k-TextInput" />
                  </div>
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="error-field"
                  />
                </div>

                <div className="form-group">
                  <button type="submit" className="kNKoCW k-Button--medium k-Button--fit-fluid">Sign Up</button>
                </div>
                
                {message && (
                  <div className="form-group">
                    <div
                      className={successful ? "error-sucess" : "error-field"}
                      role="alert"
                    >
                      {message}
                    </div>
                  </div>
                )}
              </div>
            )}
          </Form>
        </Formik>
        </div>
      </div>

    </div>
    </div>
  );
};

export default Register;

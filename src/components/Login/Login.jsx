// Module 2.
// * uncomment this component (ctrl + a => ctrl + /)
// * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2927-216&mode=design&t=0FIG0iRzKcD0s16M-0
// * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-191&mode=design&t=0FIG0iRzKcD0s16M-0
// * render this component by route '/login'
// * use login service to submit form data and make POST API request '/login'.
// * component should have a link to the Registration page (see design)
// * save token from API after success login to localStorage.
// ** PAY ATTATION ** token should be saved to localStorage inside login handler function after login service responce
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#login-new-component

// Module 3.
// * save user's name, token and email to the store after success login.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-3/home-task/components#login-component

import React, { useState } from "react";
import { login } from "../../services.js";

import styles from "./styles.module.css";
import { Input } from "../../common/Input/Input";
import { Button } from "../../common";
import { Link, useNavigate } from "react-router-dom";

export const Login = () => {
  // write your code here
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });
  const [hasError, setError] = useState(false);
  const [validationErrors, setValidationErrors] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const setUserEmail = (email) => {
    setFormState((prevState) => ({ ...prevState, email }));
  };

  const setUserPassword = (password) => {
    setFormState((prevState) => ({ ...prevState, password }));
  };

  const validate = () => {
    let isValid = true;
    const { email, password } = formState;
    let errors = {};

    if (!email) {
      isValid = false;
      errors.email = "Email is required.";
    }

    if (!password || password.length < 6) {
      isValid = false;
      errors.password = "Password is required.";
    }

    setValidationErrors(errors);
    return isValid;
  };

  const getErrorInputStyle = (field) => ({
    borderColor: validationErrors[field] ? "red" : "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validate()) {
      try {
        const data = await login(formState);
        if (!data.successful) {
          setError(true);
        }
        localStorage.setItem("token", data.result);
        navigate("/courses");
        console.log(data);
      } catch (error) {
        setError(true);
      }
    }
  };

  if (hasError) {
    return <p>Sorry, Sign up failed!</p>;
  }
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholderText={"Input text"}
            labelText={"Email"}
            onChange={(e) => setUserEmail(e.target.value)}
            style={getErrorInputStyle("email")}
          />
          {validationErrors.email ? (
            <span className={styles.highlight}>{validationErrors.email}</span>
          ) : (
            <></>
          )}
          <Input
            placeholderText={"Input text"}
            labelText={"Password"}
            onChange={(e) => setUserPassword(e.target.value)}
            style={getErrorInputStyle("password")}
          />
          {validationErrors.password ? (
            <span className={styles.highlight}>
              {validationErrors.password}
            </span>
          ) : (
            <></>
          )}
          <Button buttonText={"Login"} />
        </form>
        <p>
          If you don't have an account you may &nbsp;
          <Link to={"/registration"}>Registration</Link>
        </p>
      </div>
    </div>
  );
};

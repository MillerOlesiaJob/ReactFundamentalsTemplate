// Module 2.
// * uncomment this component (ctrl + a => ctrl + /)
// * finish markup according to the figma https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-219&mode=design&t=0FIG0iRzKcD0s16M-0
// * add validation for fields: all fields are required. Show validation message. https://www.figma.com/file/m0N0SGLclqUEGR6TUNvyn9/Fundamentals-Courses?type=design&node-id=2932-257&mode=design&t=0FIG0iRzKcD0s16M-0
// * render this component by route '/registration'
// * submit form data and make POST API request '/registration'.
// * after successful registration navigates to '/login' route.
// * component should have a link to the Login page (see design)
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-2/home-task/components#registration-new-component

import React, { useState } from "react";
import { createUser } from "../../services.js";

import styles from "./styles.module.css";
import { Input } from "../../common/Input/Input";
import { Button } from "../../common/Button/Button";
import { Link, useNavigate } from "react-router-dom";

export const Registration = () => {
  // write your code here
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const setUserName = (name) => {
    setFormState((prevState) => ({ ...prevState, name }));
  };

  const setUserEmail = (email) => {
    setFormState((prevState) => ({ ...prevState, email }));
  };

  const setUserPassword = (password) => {
    setFormState((prevState) => ({ ...prevState, password }));
  };

  const validate = () => {
    let isValid = true;
    const { name, email, password } = formState;
    let errors = {};

    if (!name) {
      isValid = false;
      errors.name = "Name is required.";
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = "Email is required.";
    }

    if (!password || password.length < 6) {
      isValid = false;
      errors.password = "Password is required.";
    }

    setErrors(errors);
    return isValid;
  };

  const getErrorInputStyle = (field) => ({
    borderColor: errors[field] ? "red" : "",
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    if (validate()) {
      await createUser(formState).then(() => {
        navigate("/login");
      });
    }
  };

  return (
    <div className={styles.container}>
      <h1>Registration</h1>
      <div className={styles.formContainer}>
        <form onSubmit={handleSubmit}>
          <Input
            placeholderText={"Input text"}
            labelText={"Name"}
            onChange={(e) => setUserName(e.target.value)}
            style={getErrorInputStyle("name")}
          />
          {errors.name ? (
            <span className={styles.highlight}>{errors.name}</span>
          ) : (
            <></>
          )}
          <Input
            placeholderText={"Input text"}
            labelText={"Email"}
            onChange={(e) => setUserEmail(e.target.value)}
            style={getErrorInputStyle("email")}
          />
          {errors.email ? (
            <span className={styles.highlight}>{errors.email}</span>
          ) : (
            <></>
          )}
          <Input
            placeholderText={"Input text"}
            labelText={"Password"}
            onChange={(e) => setUserPassword(e.target.value)}
            style={getErrorInputStyle("password")}
          />
          {errors.password ? (
            <span className={styles.highlight}>{errors.password}</span>
          ) : (
            <></>
          )}
          <Button buttonText={"Login"} />
        </form>
        <p>
          If you have an account you may &nbsp;
          <Link to={"/login"}>Login</Link>
        </p>
      </div>
    </div>
  );
};
//   return (
//     <div className={styles.container}>
//       <h1>Registration</h1>
//       <div className={styles.formContainer}>
//         <form onSubmit={handleSubmit}>
//           // reuse Input component for email field
//           // reuse Input component for name field
//           // reuse Input component for password field
//           // reuse Button component for 'Login' button
//         </form>
//         <p>
//           If you have an account you may&nbsp; // use <Link /> component for navigation to Login page
//         </p>
//       </div>
//     </div>
//   );
// };

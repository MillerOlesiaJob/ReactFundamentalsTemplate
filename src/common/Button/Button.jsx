import React from "react";

import styles from "./styles.module.css";

// Module 1:
// * use this component in components: Header, Courses
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-1/home-task/components#button-component

export const Button = ({
  buttonText,
  handleClick,
  "data-testid": dataTestId,
  icon,
}) => (
  <button
    className={styles.button}
    onClick={() => handleClick(true)}
    data-testid={dataTestId}
  >
    {buttonText}
    {icon}
  </button>
);

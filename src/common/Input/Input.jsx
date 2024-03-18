// Module 1.
// ** TASK DESCRIPTION ** - https://d17btkcdsmqrmh.cloudfront.net/new-react-fundamentals/docs/module-1/home-task/components#create-input-component

import React from "react";

import styles from "./styles.module.css";

export const Input = ({
  placeholderText,
  labelText,
  onChange,
  "data-testid": dataTestId,
  style,
}) => (
  <label className={styles.label}>
    {labelText}
    <input
      onChange={onChange}
      placeholder={placeholderText}
      className={styles.input}
      data-testid={dataTestId}
      style={style}
    />
  </label>
);

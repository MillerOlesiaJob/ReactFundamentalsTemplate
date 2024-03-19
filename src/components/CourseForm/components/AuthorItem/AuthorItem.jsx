import React from "react";

import styles from "./styles.module.css";
import { Button } from "../../../../common/Button/Button";

export const AuthorItem = ({ author }) => (
  <div className={styles.authorItem} data-testid="authorItem">
    <span>{author.name}</span>
    <Button buttonText={"Add author"} data-testid="addAuthor" />
  </div>
);

import React, { useState } from "react";
import styles from "./styles.module.css";
import { Input } from "../../../../common/Input/Input";
import { Button } from "../../../../common/Button/Button";

export const CreateAuthor = ({ onCreateAuthor }) => {
  // write your code here
  const [authorName, setInput] = useState("");
  let uuid = "";

  function guid() {
    function _p8(s) {
      var p = (Math.random().toString(16) + "000000000").substring(2, 8);
      return s ? "-" + p.substring(0, 4) + "-" + p.substring(4, 4) : p;
    }
    return _p8() + _p8(true) + _p8(true) + _p8();
  }

  const setAuthorName = (authorName) => {
    setInput((prevState) => ({ ...prevState, authorName }));
    uuid = guid();
  };

  const newAuthor = {
    id: uuid,
    ...authorName,
  };

  return (
    <div className={styles.newAuthorContainer}>
      <Input
        placeholderText={"Input text"}
        labelText={"Author Name"}
        data-testid="createAuthorInput"
        onChange={(e) => setAuthorName(e.target.value)}
        // style={getErrorInputStyle("email")}
      />
      <Button
        buttonText={"Create Author"}
        data-testid="createAuthorButton"
        handleClick={() => onCreateAuthor(newAuthor)}
      />
    </div>
  );
};

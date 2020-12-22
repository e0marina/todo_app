import React, { useState } from "react";
import { Form, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as regularCircle } from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as CheckLogo } from "../images/icon-check.svg";
import "./inputBox.css";

const InputBox = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {(!checked && (
        <Form>
          <div id="form-grid-container">
            <FontAwesomeIcon
              icon={regularCircle}
              id="circle-icon"
              onClick={() => setChecked(true)}
            />

            <Input id="inputBox" placeholder="create a new todo..." />
          </div>
        </Form>
      )) || (
        <Form>
          <div id="form-grid-container">
            <CheckLogo id="check-logo-icon" onClick={() => setChecked(false)} />
            <Input id="inputBox" placeholder="create a new todo..." />
          </div>
        </Form>
      )}
    </div>
  );
};

export default InputBox;

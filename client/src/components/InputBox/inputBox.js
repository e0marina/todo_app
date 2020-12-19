import React from "react";
import { Form, Input } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle as regularCircle } from "@fortawesome/free-regular-svg-icons";
import "./inputBox.css";

const InputBox = (props) => {
  return (
    <Form>
      <div id="form-grid-container">
        <FontAwesomeIcon icon={regularCircle} id="circle-icon" />
        <Input id="inputBox" placeholder="create a new todo" />
      </div>
    </Form>
  );
};

export default InputBox;

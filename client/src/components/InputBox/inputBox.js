import React from "react";
import { Form, Input } from "reactstrap";
import "./inputBox.css";

const InputBox = (props) => {
  return (
    <Form>
      <Input id="inputBox" placeholder="create a new todo" />
    </Form>
  );
};

export default InputBox;

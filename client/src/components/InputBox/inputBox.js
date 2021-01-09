import React, { useState } from "react";
// import { Form, Input, CustomInput } from "reactstrap";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faCircle as regularCircle } from "@fortawesome/free-regular-svg-icons";
import { ReactComponent as CheckLogo } from "../images/icon-check.svg";
import "./inputBox.css";

const InputBox = (props) => {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {(!checked && (
        <div id="form" orclassName="col-md-12">
          <input type="text" className="form-control" id="inputBox"></input>
          <input
            type="checkbox"
            className="form-check-input"
            id="checkBox"
            onClick={() => setChecked(true)}
          ></input>
        </div>
      )) || (
        <div id="form" orclassName="col-md-12">
          <input type="text" className="form-control" id="inputBox"></input>
          <CheckLogo id="check-logo-icon" onClick={() => setChecked(false)} />
        </div>
      )}
    </div>
  );
};

export default InputBox;

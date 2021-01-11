import React from "react";
import "./inputBox.css";

const InputBox = (props) => {
  return (
    <div>
      <div className="input-group mb-3" id="input-block">
        <div className="input-group-text">
          <input
            type="checkbox"
            className="form-check-input"
            value=""
            aria-label="Checkbox for following text input"
          ></input>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Text input with checkbox"
        ></input>
      </div>
    </div>
  );
};

export default InputBox;

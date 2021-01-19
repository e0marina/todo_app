import React from "react";

import "./inputBox.css";

const InputBox = (props) => {
  return (
    <div>
      <form>
        <div class="inputWrapper">
          <input id="text-input" type="text"></input>
          <input id="check-box" type="checkbox"></input>
        </div>
      </form>
    </div>
  );
};

export default InputBox;

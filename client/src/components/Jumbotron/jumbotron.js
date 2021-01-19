import React from "react";
import { Jumbotron } from "reactstrap";
import "./jumbotron.css";
import jumboBackgroundImageLight from "../images/bg-desktop-light.jpg";

const JumbotronToDo = (props) => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${jumboBackgroundImageLight})`,
          position: "relative",
          margin: "0 auto",
          maxWidth: "1440px",
          width: "100%",
          height: "282px",
        }}
      ></Jumbotron>
    </div>
  );
};

export default JumbotronToDo;

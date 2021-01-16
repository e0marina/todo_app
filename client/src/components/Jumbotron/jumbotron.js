import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./jumbotron.css";
import jumboBackgroundImageLight from "../images/bg-desktop-light.jpg";
import moon from "../images/icon-moon.svg";
import InputBox from "../InputBox/inputBox.js";

const JumbotronToDo = (props) => {
  return (
    <div>
      <Jumbotron
        style={{
          backgroundImage: `url(${jumboBackgroundImageLight})`,
          margin: "0 auto",
          maxWidth: "1440px",
          width: "100%",
          height: "282px",
        }}
      >
        <Container id="container">
          <div id="heading">TODO</div>
          <img src={moon} alt="moon icon" id="moon" />
        </Container>

        <InputBox />
      </Jumbotron>
    </div>
  );
};

export default JumbotronToDo;

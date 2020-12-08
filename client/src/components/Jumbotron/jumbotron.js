import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./jumbotron.css";
import mobileHeaderBkgd from "../../images/bg-mobile-light.jpg";
import moon from "../../images/icon-moon.svg";

const JumbotronToDo = (props) => {
  return (
    <div>
      <Jumbotron
        fluid
        style={{
          backgroundImage: `url(${mobileHeaderBkgd})`,
          width: "100%",
          height: "150px",
        }}
      >
        <Container fluid id="container">
          <div id="heading">TODO</div>
          <img src={moon} alt="moon icon" id="moon" />
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronToDo;

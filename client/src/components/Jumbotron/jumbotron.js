import React from "react";
import { Jumbotron, Container } from "reactstrap";
import "./jumbotron.css";
import car from "../../images/bg-mobile-light.jpg";

const JumbotronToDo = (props) => {
  return (
    <div>
      <Jumbotron fluid style={{ backgroundImage: `url(${car})` }}>
        <Container fluid>
          <h1 className="display-3">Fluid jumbotron</h1>
          <p className="lead">
            This is a modified jumbotron that occupies the entire horizontal
            space of its parent.
          </p>
        </Container>
      </Jumbotron>
    </div>
  );
};

export default JumbotronToDo;

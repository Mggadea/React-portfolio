import React from "react";
import Container from "@material-ui/core/Container";
import "./About.css";

const About = () => {
  return (
    <Container maxWidth="lg">
      <div className="about">
        <h1 className="about-title">About me.</h1>
        <p className="about-text">
         I’m a seasoned fullstack developer based in Buenos Aires AR, with great experience in Front-end
          with React and the DevOps field. I also have deep knowledge
          implementing complex architectures in cloud environments. I've helped
          several organizations to introduce cultural changes, best practices,
          and new technologies to improve collaboration between business,
          development, and operations and create an agile application lifecycle.{" "}
        </p>
      </div>
    </Container>
  );
};
export default About;

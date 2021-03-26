import React from "react";
import Typist from "react-typist";
import "./Contact.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

const Contact = () => {
  return (
    <div className="contact">
      <h1 className="contact__title">Interested in working together?</h1>
      <p className="contact__text">Let's talk about our next project!</p>
      <button className="contact__button">
        Connect on Linkedin <LinkedInIcon style={{ fontSize: 24 }} />{" "}
      </button>

      <br />
      <button className="contact__button">
        Send me an Email <EmailIcon />
      </button>

      <div className="footer__left">Copyright © 2021 Matias Garay Gadea</div>

      <ul className="footer__social ">
        <li className="nav-item">
          <a
            className="nav-link"
            href="https://www.linkedin.com/in/matias-garay-gadea-b789b519a/"
          >
            <LinkedInIcon style={{ fontSize: 30 }}  />
          </a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="https://github.com/Mggadea">
            <GitHubIcon  style={{ fontSize: 30 }} />
          </a>
        </li>
      </ul>
    </div>
  );
};
export default Contact;

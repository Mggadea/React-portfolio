import React from "react";
import Typist from "react-typist";
import "./Home.css";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

const Home = () => {
  return (
    <div className="home">
      <div className="home__text">
        <Typist>
          Hi , I'm <span className="resalted">Matías</span>
          <Typist.Delay ms={500} />
          <br /> Web Developer
          <Typist.Delay ms={500} />
          <br />
          Welcome to my website!
        </Typist>
      </div>

      <div>
      
        <button className="home__button"> Contact me </button>
      </div>
      <div className="home__social ">
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
      </div>
    </div>
  );
};
export default Home;

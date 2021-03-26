import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import "./App.css";
import { Fragment } from "react";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <Fragment>
      {" "}
      <Navbar />
      <Home />
       <Projects />
      <About />
      <Experience />
      <Contact />
     
    </Fragment>
  );
}

export default App;

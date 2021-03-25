import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import "./App.css";
import { Fragment } from "react";
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Fragment>
      {" "}
      <Navbar />
      <Home />
       <Projects />
      <About />
     
    </Fragment>
  );
}

export default App;

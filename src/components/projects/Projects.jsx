import React from "react";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import project2 from "../../img/project-2.PNG";
import "./Projects.css";


const Projects = () => {
  return ( <div className="projects"> <Container maxWidth="lg">
     
  <h1 className="projects__title"> My work.</h1>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <img src={project2} className="projects-img" alt=""/>
    </Grid>
    <Grid item xs={12} sm={6}>
      <p className="projects__description">
        Facebook es una red social que fue creada para poder mantener en
        contacto a personas, y que éstos pudieran compartir información,
        noticias y contenidos audiovisuales con sus propios amigos y
        familiares. Es uno de los canales digital más conocidos por todos
        los usuarios que navegan hoy en día por Internet
      </p>
      <Button variant="contained" className="projects__button">Source Code</Button>
      <Button variant="contained" color="primary">Live Url</Button>
    </Grid>
  </Grid>
  <Grid container spacing={3}>
    
    <Grid item xs={12} sm={6}>
      <p className="projects__description">
        Facebook es una red social que fue creada para poder mantener en
        contacto a personas, y que éstos pudieran compartir información,
        noticias y contenidos audiovisuales con sus propios amigos y
        familiares. Es uno de los canales digital más conocidos por todos
        los usuarios que navegan hoy en día por Internet
      </p>
      <Button variant="contained" className="projects__button">Source Code</Button>
      <Button variant="contained" color="primary">Live Url</Button>
    </Grid>
    <Grid item xs={12} sm={6}>
      <img src={project2} className="projects-img" alt=""/>
    </Grid>
  </Grid>
  <Grid container spacing={3}>
    <Grid item xs={12} sm={6}>
      <img src={project2} className="projects-img" alt=""/>
    </Grid>
    <Grid item xs={12} sm={6}>
      <p className="projects__description">
        Facebook es una red social que fue creada para poder mantener en
        contacto a personas, y que éstos pudieran compartir información,
        noticias y contenidos audiovisuales con sus propios amigos y
        familiares. Es uno de los canales digital más conocidos por todos
        los usuarios que navegan hoy en día por Internet
      </p>
      <Button variant="contained" className="projects__button">Source Code</Button>
      <Button variant="contained" color="primary">Live Url</Button>
    </Grid>
  </Grid>
  <Grid container spacing={3}>
    
    <Grid item xs={12} sm={6}>
      <p className="projects__description">
        Facebook es una red social que fue creada para poder mantener en
        contacto a personas, y que éstos pudieran compartir información,
        noticias y contenidos audiovisuales con sus propios amigos y
        familiares. Es uno de los canales digital más conocidos por todos
        los usuarios que navegan hoy en día por Internet
      </p>
      <Button variant="contained" className="projects__button">Source Code</Button>
      <Button variant="contained" color="primary">Live Url</Button>
    </Grid>
    <Grid item xs={12} sm={6}>
      <img src={project2} className="projects-img" alt=""/>
    </Grid>
  </Grid>

</Container>
</div>
   
  );
};
export default Projects;

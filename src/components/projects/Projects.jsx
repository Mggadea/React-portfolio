import React from "react";
import Container from "@material-ui/core/Container";
import "./Projects.css";
import Grid from "@material-ui/core/Grid";
import project1 from "../../img/project-1.PNG";

const Projects = () => {
  return (
    <Container maxWidth="lg">
      <div className="projects">
        <h1 className="projectstitle"> My work.</h1>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}></Grid>
          <Grid item xs={12} sm={6}>
            <p>
              Facebook es una red social que fue creada para poder mantener en
              contacto a personas, y que éstos pudieran compartir información,
              noticias y contenidos audiovisuales con sus propios amigos y
              familiares. Es uno de los canales digital más conocidos por todos
              los usuarios que navegan hoy en día por Internet
            </p>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
};
export default Projects;

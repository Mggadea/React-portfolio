import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    navbar: {
      backgroundColor: "#222222",
    },

    title: {
      flexGrow: 1,
    },
  })
);

export default function Navbara() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="sticky" className={classes.navbar}>
        <Container maxWidth="lg">
          {" "}
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              Matias Garay Gadea
            </Typography>
            <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Projects</Button>
            <Button color="inherit">Contact</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}

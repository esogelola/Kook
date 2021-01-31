import React from "react";

import { Container, Paper, Grid, Box, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import Projects from "../components/Projects";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    margin: theme.spacing(5),
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  image: {
    width: "100%",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Box className={classes.paper}>
      <Grid
        container
        direction="row"
        justify="center"
        spacing={3}
        alignItems="center"
      >
        <Grid item xs={12} sm={12} md={4}>
          <img
            className={classes.image}
            src="assets/Emmanuel.jpg"
            alt="about-hero-me"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4}>
          <Typography
            component="h1"
            variant="h4"
            color="textPrimary"
            gutterBottom
          >
            Hi!👋
          </Typography>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            I'm Emmanuel.
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            paragraph
          >
            I'm currently a student at Georgebrown College studying Computer
            Programming. I program in Java, JavaScript/TypeScript, C++, C# and
            Python and I occasionally develop web apps using various frameworks
            (Django/Flask, React, ASP.NET, PHP).
          </Typography>
          <Typography
            variant="body2"
            align="center"
            color="textSecondary"
            paragraph
          >
            Check out my portfolio @{" "}
            <a href="https://esogelola.com/" target="_blank" rel="noreferrer">
              esogelola.com
            </a>{" "}
            or my{" "}
            <a
              href="https://twitter.com/esogelola"
              target="_blank"
              rel="noreferrer"
            >
              Twitter
            </a>
            .
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography
            variant="h6"
            align="center"
            color="textSecondary"
            paragraph
          >
            Top Projects:
          </Typography>

          <Projects />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;

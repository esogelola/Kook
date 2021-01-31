import React from "react";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";

import { Box } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  heroImage: {
    width: "700px",
  },
}));

export default function Home(props) {
  const classes = useStyles();
  const history = useHistory();
  console.log(props);
  return (
    <Container>
      <CssBaseline />
      <main>
        <div className={classes.heroContent}>
          <Container maxWidth="md">
            <Typography
              component="h1"
              variant="h4"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              The best way to organize your recipes
            </Typography>
            <Typography
              variant="h6"
              align="center"
              color="textSecondary"
              paragraph
            >
              Kook is the quick and easy way to collect, and organize your
              favorite recipes. Import any recipe you want from any website, no
              distractions or overhaul.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      history.push("/login");
                    }}
                    color="default"
                  >
                    Sign In
                  </Button>
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    onClick={() => {
                      history.push("/register");
                    }}
                    color="primary"
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            style={{ marginTop: "5px" }}
          >
            <img
              className={classes.heroImage}
              src="/assets/laptopphone.png"
              alt="hero-app-demo"
            />
          </Box>
        </div>
      </main>
    </Container>
  );
}

import * as React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Avatar,
  List,
  ListItem,
  ListItemText,
  Container,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import SideDrawer from "./SideDrawer";
import { Link } from "react-router-dom";
const navLinks = [
  { title: `about`, path: `/about`, protected: false },
  { title: `sign in`, path: `/login`, protected: false },
  { title: `Sign Up`, path: `/register`, protected: false },
];
const useStyles = makeStyles((theme) => ({
  navbarDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  navDisplayFlex: {
    display: `flex`,
    justifyContent: `space-between`,
  },
  linkText: {
    textDecoration: `none`,
    textTransform: `uppercase`,
    color: `white`,
  },
  logo: {
    textDecoration: "none",
    display: `flex`,
    display: "flex",
    alignItems: "center",
    flexWrap: "wrap",
  },
  title: {
    fontFamily: "Dancing Script",
  },
  logoImg: { marginRight: "1px" },
}));

function Logo({ CssClasses }) {
  return (
    <Link color="inherit" className={CssClasses.logo} to="/">
      <img className={CssClasses.logoImg} src="assets/KOOK.svg" />
      <Typography
        className={CssClasses.title}
        variant="h4"
        align="center"
        color="textPrimary"
      >
        KOOK
      </Typography>
    </Link>
  );
}

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <Container maxWidth="xl" className={classes.navbarDisplayFlex}>
          <Logo CssClasses={classes} />
          <Hidden smDown>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex} // this
            >
              {navLinks.map(({ title, path, comp }) => (
                <Link to={path} key={title} className={classes.linkText}>
                  <ListItem button>
                    <ListItemText primary={title} />
                  </ListItem>
                </Link>
              ))}
            </List>
          </Hidden>
          <Hidden mdUp>
            <SideDrawer navLinks={navLinks} />
          </Hidden>
        </Container>
      </Toolbar>
    </AppBar>
  );
};
export default Header;

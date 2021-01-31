import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";
import { Backdrop, Button, Container, Grid, Paper } from "@material-ui/core";
import CssBaseline from "@material-ui/core/CssBaseline";

import CircularProgress from "@material-ui/core/CircularProgress";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import { Switch, Route } from "react-router-dom";

import Cookbooks from "./AppPages/CookBooks";
import Search from "./AppPages/Search";
export default function Dashboard() {
  const user = useContext(UserContext);
  const [busy, setBusy] = React.useState(true);

  React.useEffect(() => {
    if (user.user !== null) {
      setBusy(false);
    }
  }, [user.user]);
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    container: {
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(4),
    },
    paper: {
      padding: theme.spacing(2),
      display: "flex",
      overflow: "auto",
      flexDirection: "column",
    },
    fixedHeight: {
      height: 240,
    },
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: "#fff",
    },
  }));

  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return busy ? (
    <Backdrop className={classes.backdrop} open={true}>
      <CircularProgress />
    </Backdrop>
  ) : (
    <Switch>
      <Route path={"/app/cookbooks"}>
        <Cookbooks />
      </Route>
      <Route path={"/app/search"}>
        <Search />
      </Route>
    </Switch>
  );
}
